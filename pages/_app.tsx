// import "@/styles/reset.css";
// import type { AppProps } from "next/app";
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import React from "react";

// export default function App({ Component, pageProps }: AppProps) {
//   const [queryClient] = React.useState(
//     () =>
//       new QueryClient({
//         defaultOptions: {
//           queries: {
//             // 보통 SSR에서는 staleTime을 0 이상으로 해줌으로써
//             // 클라이언트 사이드에서 바로 다시 데이터를 refetch 하는 것을 피한다.
//             staleTime: 60 * 1000,
//           },
//         },
//       })
//   );

//   return <Component {...pageProps} />;
// }

// 시도 1

// import "@/styles/reset.css";
// import type { AppProps } from "next/app";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// // import { Hydrate } from "react-query/hydration";
// import React, { useState } from "react";

// export default function App({ Component, pageProps, ...rest }: AppProps) {
//   const [queryClient] = useState(() => new QueryClient());

//   return (
//     <QueryClientProvider client={queryClient}>
//       {/* <Hydrate state={pageProps.dehydratedState}> */}
//       <Component {...pageProps} />
//       {/* </Hydrate> */}
//     </QueryClientProvider>
//   );
// }

// 시도 2

import React from "react";
import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function MyApp({ Component, pageProps }) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </HydrationBoundary>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
