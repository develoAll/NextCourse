import Link from 'next/link'
import { useRouter } from 'next/router'
import { CSSProperties, FC } from 'react';

const style: CSSProperties = {
    color: '#0070f3',
    textDecoration: 'underLine',
}

interface Props {
    text: string,
    href: string
}

export const ActiveLink: FC<Props> = ({text, href}) => {

    const { asPath } = useRouter();
    // console.log(router);

    return (
        <Link href={href}>
            <a style={ asPath === href ? style: undefined}>{text}</a>
        </Link>
    )
}
