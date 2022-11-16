import { component$, useStore } from '@builder.io/qwik';

export default component$(() => {
    const store = useStore({
        "value": [`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
    
        gtag('config', 'G-Q45QV4LVND'); `]
    })
    return (
        <>
            {store.value.map(e =>
                <script id="googletag" async type="text/partytown">
                    {e}
                </script>
            )
            }
        </>
    )
})