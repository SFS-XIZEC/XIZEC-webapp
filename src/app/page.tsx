import Banner from "@/components/global/Banner";
// import { getStrapiURL } from "@/lib/utils";

// async function loader() {
//   const { fetchData } = await import("@/lib/api");

//   const path = "/api/global";

//   const baseUrl = getStrapiURL();

//   const url = new URL(path, baseUrl);

//   const data = await fetchData(url.href);

//   return data;
// }

export default async function Home() {
  // const data = await loader()
  // if(!data) return null;
  return ( 
   <div>
    landing page
   </div>
  );
}
