import _ from "lodash";
import { LOCAL_VENDOR_LIST, Vendor } from "../lib/data/Vendors.data";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/Card";
import { Button, buttonVariants } from "../components/Button";
import { Link } from "react-router-dom";
import { Alert, AlertTitle } from "../components/Alert";

function VendorCard(props: { vendor: Vendor }) {
  const {vendor} = props
  return <div className="p-2">
  <CardTitle className="text-center p-2 bg-white rounded-md rounded-b-none flex justify-center align-middle h-auto">
    <img
      className="rounded-md h-20 contain-content"
      src={vendor.imgPath}
      alt={vendor.name}
    />
  </CardTitle>
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
    <CardContent>{vendor.description}</CardContent>
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
          <CardTitle>Trusted Local Vendors (🇮🇳)</CardTitle>
        </CardHeader>
        <div className="flex flex-wrap mx-5 [&>*]:md:w-1/3 [&>*]:lg:w-1/4 md:flex-row flex-col">
          {_.map(_.sortBy(LOCAL_VENDOR_LIST, "name"), (vendor) => (
            <VendorCard vendor={vendor} />
          ))}
        </div>
      </Card>
    </>
  );
}
