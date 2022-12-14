import { Button } from "@ui/button";
import NextLink from "next/link";

const PreviewPane = ({
    children,
    title,
}: {
    children: React.ReactNode;
    title: string;
}) => (
    <div className=" border-b border-fuchsia-300 [&_h1]:text-2xl [&_h1]:font-bold p-8 [&_h1]:mb-8 bg-fuchsia-100">
        <h1>{title}</h1>
        <div className="flex-row flex-wrap items-start flex">{children}</div>
    </div>
);

const Col = ({
    children,
    title,
}: {
    children: React.ReactNode;
    title: string;
}) => (
    <div className="w-80 p-8">
        <h2 className="font-bold border-b border-fuchsia-300 mb-5">{title}</h2>
        <div className="flex flex-col items-start space-y-3">{children}</div>
    </div>
);

export default function Home() {
    return (
        <>
            <PreviewPane title="Buttons">
                <Col title="Default">
                    <Button>Button Text</Button>
                    <Button size="slim">Button Text (small)</Button>
                    <Button size="large">Button Text (large)</Button>
                    <Button intent="outline">Button Text</Button>
                    <Button intent="ghost">Button Text (ghost)</Button>
                    <Button>Button Text (ghost)</Button>
                    <Button>汉</Button>
                </Col>
                <Col title="State">
                    <Button>Button Text</Button>
                    <Button size="slim">Button Text (small)</Button>
                    <Button size="large" as={NextLink} href="/" disabled>
                        Button Text (large) disabled
                    </Button>
                    <Button intent="outline">Button Text</Button>
                    <Button intent="ghost">Button Text (ghost)</Button>
                    <Button>Button Text (ghost)</Button>
                    <Button>汉</Button>
                </Col>
                <Col title="Input">
                    <Button>Button Text</Button>
                    <Button size="slim">Button Text (small)</Button>
                    <Button size="large">Button Text (large)</Button>
                    <Button intent="outline">Button Text</Button>
                    <Button intent="ghost">Button Text (ghost)</Button>
                    <Button>Button Text (ghost)</Button>
                    <Button>汉</Button>
                </Col>
                <Col title="Submit">
                    <Button>Submit</Button>
                    <Button size="slim">Button</Button>
                    <Button size="large">Reset</Button>
                    <Button intent="outline">Disabled</Button>
                    <Button intent="ghost">file</Button>
                    <Button>Button Text (ghost)</Button>
                    <Button>汉</Button>
                </Col>
            </PreviewPane>
        </>
    );
}
