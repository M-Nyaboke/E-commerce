
import { Typography } from "antd";

function AppFooter() {
    return (
        <div className="AppFooter">
            <Typography.Link href="https://www.google.com" target={"_blank"}>
                Privacy Policy
            </Typography.Link>
            <Typography.Link href="https://www.google.com" target={"_blank"}>
                Terms & Conditions
            </Typography.Link>
            <Typography.Link href="https://www.google.com" target={"_blank"}>
                Return Policy
            </Typography.Link>
            <Typography.Link href="tel:+254710402171" target={"_blank"}>
                +254710402171
            </Typography.Link>
        </div>
    )
}
export default AppFooter