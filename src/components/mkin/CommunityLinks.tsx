import _ from "lodash";
import { Card, CardContent, CardFooter, CardHeader } from "../Card";
import { Button, buttonVariants } from "../Button";
import { Link } from "react-router-dom";
import { COMMUNITY_LINKS } from "../../lib/data/CommunityLinks.data";

export default function CommunityLinks() {
  return (
    <>
      {_.map(COMMUNITY_LINKS, (linkItem) => (
        <Card>
          <CardHeader>{linkItem.title}</CardHeader>
          <CardContent>
            {linkItem.content}
            {!_.isEmpty(linkItem.bottomText) ? (
              <div className="font-semibold mt-2">{linkItem.bottomText}</div>
            ) : null}
          </CardContent>
          {linkItem.link && linkItem.linkText ? (
            <CardFooter>
              <Button asChild>
                <Link
                  className={buttonVariants({ variant: "secondary" })}
                  to={linkItem.link}
                  target={!linkItem.openInSameTab ? "_blank" : undefined}
                >
                  {linkItem.linkText}
                </Link>
              </Button>
            </CardFooter>
          ) : null}
        </Card>
      ))}
    </>
  );
}
