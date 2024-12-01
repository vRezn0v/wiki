import { Card, CardContent, CardHeader, CardTitle } from "../Card";

export default function Lander() {
  return (
    <Card className="m-2 font-sans flex-auto">
      <CardHeader>
        <CardTitle className="text-center">
          🌐 Our Community Website is Coming Soon!
        </CardTitle>
      </CardHeader>
      <CardContent className="px-10">
        We're thrilled to announce that a dedicated website for our mechanical
        keyboard community is in the works! This site will be a one-stop
        destination for all enthusiasts, featuring:
        <ul className="[&>*]:my-1 [&>*]:mx-4">
          <li>Comprehensive guides for beginners and advanced users.</li>
          <li>
            A growing wiki packed with knowledge about switches, keycaps, and
            builds.
          </li>
          <li>
            Links to community resources like our Discord, indexes for trusted
            vendors and community run group buys and member-created tools.
          </li>
          <li>And much more!</li>
        </ul>
        Our goal is to create a platform that celebrates and supports everyone
        in the mechanical keyboard community. Whether you're building your first
        board or fine-tuning a custom masterpiece, there will be something for
        you. We can't wait to share it with you.
        <div className="font-semibold mt-5">
          Stay tuned—exciting updates are just around the corner! 🚀
        </div>
      </CardContent>
    </Card>
  );
}
