// import { CardList } from "@/components/feature-card-list/CardList";
// import Layout from "@/components/feature-layout/Layout";
// import { FolderToolBar } from "@/components/folder/feature-folder-tool-bar/FolderToolBar";
// import { SearchBar } from "@/components/folder/ui-search-bar/SearchBar";
// import { FolderLayout } from "@/components/page-layout/FolderLayout/FolderLayout";
// import { LinkForm } from "@/components/ui-link-form/LinkForm";
// import { instance } from "@/components/util/instance";
// import { mapDataFormat } from "@/components/util/mapDataFormat";
// import { QueryClient, dehydrate, useQuery } from "@tanstack/react-query";
// import { ChangeEvent, MouseEventHandler, useState } from "react";
// import { getUser } from "./api/user";
// import { getFolders } from "./api/folder";
// import { getLinksAll, getLinksById } from "./api/links";

// interface UserDataProps {
//   id: number;
//   name: string;
//   email: string;
//   profileImageSource: string;
// }

// interface FoldersData {
//   id: number;
//   created_at: string;
//   name: string;
//   user_id: number;
//   favorite: boolean;
//   link: { count: number };
// }

// interface LinksRawData {
//   id: number;
//   title: string;
//   url: string;
//   imageSource: string;
//   createdAt: string;
//   description: string;
//   alt: string;
// }

// interface FolderProps {
//   userData: UserDataProps;
//   foldersData: FoldersData[];
//   linksRawData: LinksRawData[];
// }

// export default function Folder() {
//   const { data: userData } = useQuery({ queryKey: ["user"], queryFn: getUser });
//   const { data: foldersData } = useQuery({
//     queryKey: ["folders"],
//     queryFn: getFolders,
//   });
//   const { data: initialLinks } = useQuery({
//     queryKey: ["links"],
//     queryFn: getLinksAll,
//   });

//   const [selectedFolderId, setSelectedFolderId] = useState();
//   const [linksData, setLinksData] = useState(initialLinks?.data);
//   const [searchValue, setSearchValue] = useState("");

//   // const [folders, setFolders] = useState(foldersData);
//   // const [selectedFolderId, setSelectedFolderId] = useState<number | "all">(
//   //   "all"
//   //);
//   const links = linksData.map((link: any) => mapDataFormat(link)) ?? [];

//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setSearchValue(e.target.value);
//   };
//   const handleCloseClick = (e: MouseEventHandler<HTMLButtonElement>) => {
//     setSearchValue("");
//   };

//   return (
//     <Layout isSticky={false} userdata={userData}>
//       <FolderLayout
//         // linkForm={<LinkForm folders={foldersData} />}
//         linkForm={<LinkForm />}
//         searchBar={
//           <SearchBar
//             value={searchValue}
//             onChange={handleChange}
//             onCloseClick={handleCloseClick}
//           />
//         }
//         // folderToolBar={
//         // <FolderToolBar
//         //   folders={foldersData}
//         //   selectedFolderId={selectedFolderId}
//         //   setSelectedFolderId={setSelectedFolderId}
//         // />
//         // }
//         cardList={<CardList linksData={links} />}
//       />
//     </Layout>
//   );
// }

// export async function getServerSideProps() {
//   const queryClient = new QueryClient();

//   await queryClient.prefetchQuery({
//     queryKey: ["user"],
//     queryFn: getUser,
//   });

//   await queryClient.prefetchQuery({
//     queryKey: ["folders"],
//     queryFn: getFolders,
//   });

//   await queryClient.prefetchQuery({
//     queryKey: ["links"],
//     queryFn: getLinksAll,
//   });

//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//     },
//   };
// }

function Folder() {
  return;
}

export default Folder;
