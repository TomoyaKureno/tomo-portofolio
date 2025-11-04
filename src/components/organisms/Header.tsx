import { Card, Flex, Text } from "@mantine/core";
import Link from "next/link";

const navigationLinks = [
    { to: '/', label: 'About' },
    { to: '/resumes', label: 'Resume' },
    { to: '/projects', label: 'Project' },
    { to: '/certificates', label: 'Certificate' },
    { to: '/contact', label: 'Contact' },
];

const Header = () => {
    return (
        <Card shadow={"sm"} pos={"absolute"} top={0} right={0} p={0} withBorder
            style={{
                borderTopLeftRadius: "0px",
                borderTopRightRadius: "var(--mantine-radius-md)",
                borderBottomRightRadius: "0px",
                borderBottomLeftRadius: "var(--mantine-radius-md)",
                zIndex: "var(--mantine-z-index-overlay)",
                transform: "translate(1px, -1px)", // move 50px right and 20px down
            }}>
            <Flex
                px={"xl"}
                py={"md"}
                gap={"xl"}
                bg={"blue.7"}
                c={"white"}
                justify={"flex-end"}
            >
                {navigationLinks.map((value) => (
                    <Link key={value.label} href={value.to}>
                        <Text fw={600}>{value.label}</Text>
                    </Link>
                ))}
            </Flex>
        </Card>
    );
};

export default Header;
