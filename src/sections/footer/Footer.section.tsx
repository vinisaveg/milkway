import Link from 'next/link';
import { FunctionComponent } from 'react';

import {
    FooterOutsideLayer,
    FooterWrapper,
    SideWrapper,
    LinksSideWrapper,
    Logo,
    SimpleLink,
    LinksWrapper,
    DoubleLinksWrapper,
    LinksTitle,
    UsefulLink,
} from './footer.styles';

import homepage from '../../content/homepage';

const Footer: FunctionComponent = () => {
    return (
        <FooterOutsideLayer>
            <FooterWrapper>
                <SideWrapper>
                    <Logo>milkway</Logo>

                    <Link href="https://github.com/vinisaveg/milkway" passHref>
                        <SimpleLink target="_blank">
                            {homepage.footer.projectLink}
                        </SimpleLink>
                    </Link>
                </SideWrapper>

                <LinksSideWrapper>
                    <DoubleLinksWrapper>
                        <LinksWrapper>
                            <LinksTitle>
                                {homepage.footer.links.first.title}
                            </LinksTitle>

                            <Link
                                href={homepage.footer.links.first.link1.url}
                                passHref
                            >
                                <UsefulLink>
                                    {homepage.footer.links.first.link1.name}
                                </UsefulLink>
                            </Link>

                            <Link
                                href={homepage.footer.links.first.link2.url}
                                passHref
                            >
                                <UsefulLink>
                                    {homepage.footer.links.first.link2.name}
                                </UsefulLink>
                            </Link>

                            <Link
                                href={homepage.footer.links.first.link3.url}
                                passHref
                            >
                                <UsefulLink>
                                    {homepage.footer.links.first.link3.name}
                                </UsefulLink>
                            </Link>
                        </LinksWrapper>

                        <LinksWrapper>
                            <LinksTitle>
                                {homepage.footer.links.second.title}
                            </LinksTitle>

                            <Link
                                href={homepage.footer.links.second.link1.url}
                                passHref
                            >
                                <UsefulLink>
                                    {homepage.footer.links.second.link1.name}
                                </UsefulLink>
                            </Link>

                            <Link
                                href={homepage.footer.links.second.link2.url}
                                passHref
                            >
                                <UsefulLink>
                                    {homepage.footer.links.second.link2.name}
                                </UsefulLink>
                            </Link>
                        </LinksWrapper>
                    </DoubleLinksWrapper>

                    <DoubleLinksWrapper>
                        <LinksWrapper>
                            <LinksTitle>
                                {homepage.footer.links.third.title}
                            </LinksTitle>

                            <Link
                                href={homepage.footer.links.third.link1.url}
                                passHref
                            >
                                <UsefulLink>
                                    {homepage.footer.links.third.link1.name}
                                </UsefulLink>
                            </Link>

                            <Link
                                href={homepage.footer.links.third.link2.url}
                                passHref
                            >
                                <UsefulLink>
                                    {homepage.footer.links.third.link2.name}
                                </UsefulLink>
                            </Link>
                        </LinksWrapper>

                        <LinksWrapper>
                            <LinksTitle>
                                {homepage.footer.links.fourth.title}
                            </LinksTitle>

                            <Link
                                href={homepage.footer.links.fourth.link1.url}
                                passHref
                            >
                                <UsefulLink>
                                    {homepage.footer.links.fourth.link1.name}
                                </UsefulLink>
                            </Link>

                            <Link
                                href={homepage.footer.links.fourth.link2.url}
                                passHref
                            >
                                <UsefulLink>
                                    {homepage.footer.links.fourth.link2.name}
                                </UsefulLink>
                            </Link>
                        </LinksWrapper>
                    </DoubleLinksWrapper>
                </LinksSideWrapper>
            </FooterWrapper>
        </FooterOutsideLayer>
    );
};

export default Footer;
