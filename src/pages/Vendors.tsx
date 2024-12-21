import _ from "lodash";
import {
  INTL_VENDOR_LIST,
  LOCAL_VENDOR_LIST,
  Vendor,
} from "../lib/data/Vendors.data";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/Card";
import { Button, buttonVariants } from "../components/Button";
import { Link } from "react-router-dom";
import { Alert, AlertTitle } from "../components/Alert";

const RATING_MAP = {
  1: "S-Tier",
  2: "A-Tier",
  3: "B-Tier",
};

function VendorCard(props: { vendor: Vendor }) {
  const { vendor } = props;
  return (
    <div className="p-2">
      {vendor.imgPath ? (
        <CardTitle className="text-center p-2 bg-white rounded-md rounded-b-none flex justify-center align-middle h-auto">
          <img
            className="rounded-md h-20 contain-content"
            src={vendor.imgPath}
            alt={vendor.name}
          />
        </CardTitle>
      ) : null}
      <Card className="rounded-t-none">
        <CardHeader className="text-left">
          <Link
            className={`text-primary underline-offset-4 hover:underline w-max`}
            to={vendor.url}
            target="_blank"
          >
            {" "}
            <CardTitle>{vendor.name}</CardTitle>
          </Link>
        </CardHeader>
        {vendor.region || vendor.rating ? (
          <CardContent>
            <CardDescription className="font-semibold text-primary">
              {_.join(
                _.filter(
                  [vendor.region, _.get(RATING_MAP, `${vendor.rating}`, "")],
                  Boolean
                ),
                " | "
              )}
            </CardDescription>
          </CardContent>
        ) : null}
        <CardContent> {vendor.description}</CardContent>
        <CardFooter>
          <Button asChild>
            <Link
              className={buttonVariants({ variant: "default" })}
              to={vendor.url}
              target="_blank"
            >
              Browse
            </Link>
          </Button>
          {vendor.discord ? (
            <Link
              className={buttonVariants({ variant: "link" })}
              to={vendor.url}
              target="_blank"
            >
              Join Discord Community
            </Link>
          ) : null}
        </CardFooter>
      </Card>
    </div>
  );
}

export default function Vendors() {
  return (
    <>
      <div className="m-5 mb-0">
        <Link className="font-semibold" to="/">
          Back to home
        </Link>
        <Alert className="mt-5">
          <AlertTitle>🚧 This page is still under construction </AlertTitle>
        </Alert>
      </div>

      <Card className="bg-secondary m-5">
        <CardHeader>
          <CardTitle>🇮🇳 Trusted Local Vendors</CardTitle>
        </CardHeader>
        <div className="flex flex-wrap mx-5 [&>*]:md:w-1/3 [&>*]:lg:w-1/4 md:flex-row flex-col">
          {_.map(_.sortBy(LOCAL_VENDOR_LIST, "name"), (vendor) => (
            <VendorCard vendor={vendor} />
          ))}
        </div>
      </Card>
      <Card className="bg-secondary m-5">
        <CardHeader>
          <CardTitle>🌍 Trusted Global Vendors</CardTitle>
        </CardHeader>
        {_.map(
          _.entries(_.groupBy(_.sortBy(INTL_VENDOR_LIST, "region"), "region")),
          ([region, regionalVendors]) => (
            <>
                <div className="font-semibold text-primary ml-10 text-lg">{region}</div>
              <div className="flex flex-wrap mx-5 [&>*]:md:w-1/3 [&>*]:lg:w-1/4 md:flex-row flex-col">
                {_.map(_.sortBy(regionalVendors, "rating"), (vendor) => (
                  <VendorCard vendor={vendor} />
                ))}
              </div>
            </>
          )
        )}
      </Card>
    </>
  );
}
