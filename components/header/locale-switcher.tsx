import Link from 'next/link'
import { useRouter } from 'next/router'

export default function LocaleSwitcher() {
    const router = useRouter()
    const { locales, locale: activeLocale } = router

    return (
        <>
            <div className='locales'>
                {locales?.map((locale) => {
                    const { pathname, query, asPath } = router
                    return (
                        <span key={locale}>
                            {
                                locale !== activeLocale ?
                                    (<Link
                                        href={{ pathname, query }}
                                        as={asPath}
                                        locale={locale}
                                        legacyBehavior
                                    >
                                        {locale}
                                    </Link>) : <u>{locale}</u>
                            }
                        </span>

                    )
                })}
            </div>
            <style jsx>{`
            .locales > * {
                    margin: 0rem .3rem;
                    display: inline-block;
                    position: relative;
            }
            `}</style>
        </>
    )
}