"use server"

import HomePagae from "@/view/home";
import {getQueryClient, queryFn} from "@/utils";

export default async function Home() {
  // const queryClient = getQueryClient();
  // const catalogParams = {isParent: true, limit: 'all'};

  // await queryClient.prefetchQuery<any>({
  //   queryKey: ['/categories/public', catalogParams],
  //   queryFn: (context) => queryFn<any>(context, catalogParams),
  // });

  // await queryClient.prefetchQuery({
  //   queryKey: ['/products/public/group/category'],
  //   queryFn: (context) => queryFn<any>(context)
  // })

  // await queryClient.prefetchQuery({
  //   queryKey: ['/products/public/shuffle'],
  //   queryFn: (context) => queryFn<any>(context)
  // })

  return (
    <>
    {/* <HydrationBoundary state={dehydrate(queryClient)}> */}
     <HomePagae/>
     {/* </HydrationBoundary> */}
    </>
  );
}
