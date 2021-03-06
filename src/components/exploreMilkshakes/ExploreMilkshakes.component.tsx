import Link from 'next/link';
import { FunctionComponent } from 'react';
import { MilkshakeIconWrapper } from '../community/community.styles';
import {
    MilkshakeDescription,
    MilkshakeName,
} from '../userMilkshakes/userMilkshakes.styles';

import {
    Wrapper,
    MilkshakeBorderWrapper,
    MilkshakeWrapper,
} from './exploreMilkshakes.styles';

const ExploreMilkshakes: FunctionComponent = () => {
    return (
        <Wrapper>
            <MilkshakeBorderWrapper>
                <Link key="id" href={`/milkshake/id1`}>
                    <MilkshakeWrapper className="wrapper">
                        <MilkshakeIconWrapper>
                            <svg
                                width="72"
                                height="110"
                                viewBox="0 0 72 110"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M48.7576 39.1828C47.8836 38.9781 47.3411 38.1035 47.5458 37.2297L55.4459 3.50116C55.8495 1.77735 57.3677 0.573486 59.138 0.573486H69.4484C70.3461 0.573486 71.0738 1.30097 71.0738 2.19864C71.0738 3.09631 70.3461 3.8238 69.4484 3.8238H59.138C58.8852 3.8238 58.6683 3.9959 58.6106 4.24188L50.7105 37.9704C50.5055 38.8514 49.6111 39.3829 48.7576 39.1828Z"
                                    fill="#BAD6E5"
                                />
                                <path
                                    d="M35.9906 68.9105C52.1359 68.9105 65.2242 55.8222 65.2242 39.677C65.2242 23.5317 52.1359 10.4434 35.9906 10.4434C19.8453 10.4434 6.75696 23.5317 6.75696 39.677C6.75696 55.8222 19.8453 68.9105 35.9906 68.9105Z"
                                    fill="#EAF6FF"
                                />
                                <path
                                    d="M35.9904 10.4434C34.8914 10.4434 33.8073 10.5061 32.7399 10.6242C47.3552 12.2413 58.7231 24.6308 58.7231 39.677C58.7231 54.7231 47.3552 67.1126 32.7399 68.7297C33.8073 68.848 34.8914 68.9105 35.9904 68.9105C52.1356 68.9105 65.2242 55.8222 65.2242 39.677C65.2242 23.5317 52.1356 10.4434 35.9904 10.4434Z"
                                    fill="#D8ECFE"
                                />
                                <path
                                    d="M52.6064 15.6238L47.5458 37.2297C47.3411 38.1035 47.8836 38.9779 48.7576 39.1829C49.6111 39.383 50.5055 38.8515 50.7107 37.9709L55.4256 17.8413C54.5331 17.0465 53.5919 16.3056 52.6064 15.6238Z"
                                    fill="#C4E2FF"
                                />
                                <path
                                    d="M52.1926 109.9H19.7886C16.4584 109.9 13.6668 107.383 13.3223 104.071L7.42725 47.3804H64.5535L58.6585 104.071C58.3145 107.383 55.5228 109.9 52.1926 109.9Z"
                                    fill="#FF4959"
                                />
                                <path
                                    d="M68.8874 37.6287H3.09312C1.89629 37.6287 0.926025 38.5989 0.926025 39.7958V45.2134C0.926025 46.4102 1.89629 47.3805 3.09312 47.3805H68.8874C70.0843 47.3805 71.0545 46.4102 71.0545 45.2134V39.7958C71.0545 38.5989 70.0843 37.6287 68.8874 37.6287Z"
                                    fill="#FF4959"
                                />
                            </svg>
                        </MilkshakeIconWrapper>
                        <MilkshakeName>Super Nice MIlkshake</MilkshakeName>

                        <MilkshakeDescription>
                            A super recipe that will make you cry
                        </MilkshakeDescription>
                    </MilkshakeWrapper>
                </Link>
            </MilkshakeBorderWrapper>
        </Wrapper>
    );
};

export default ExploreMilkshakes;
