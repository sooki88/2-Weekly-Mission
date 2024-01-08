import { CardList } from "@/components/feature-card-list/CardList";
import Layout from "@/components/feature-layout/Layout";
import { FolderToolBar } from "@/components/folder/feature-folder-tool-bar/FolderToolBar";
import { SearchBar } from "@/components/folder/ui-search-bar/SearchBar";
import { FolderLayout } from "@/components/page-layout/FolderLayout/FolderLayout";
import { LinkForm } from "@/components/ui-link-form/LinkForm";
import { instance } from "@/components/util/instance";
import { ChangeEvent, MouseEventHandler, useState } from "react";

interface UserDataProps {
  id: number;
  name: string;
  email: string;
  profileImageSource: string;
}

interface FoldersData {
  id: number;
  created_at: string;
  name: string;
  user_id: number;
  favorite: boolean;
  link: { count: number };
}

interface LinksData {
  id: number;
  created_at: string;
  updated_at: any;
  url: string;
  title: string;
  description: string;
  image_source: string;
  folder_id: number;
}

interface FolderProps {
  userData: UserDataProps;
  foldersData: FoldersData[];
  linksData: LinksData[];
}

export default function Folder({
  userData,
  foldersData,
  linksData,
}: FolderProps) {
  const [searchValue, setSearchValue] = useState("");
  const [folders, setFolders] = useState(foldersData);
  const [selectedFolderId, setSelectedFolderId] = useState<number | "all">(
    "all"
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  const handleCloseClick = (e: MouseEventHandler<HTMLButtonElement>) => {
    setSearchValue("");
  };

  return (
    <Layout isSticky={false} userdata={userData}>
      <FolderLayout
        linkForm={<LinkForm folders={folders} />}
        searchBar={
          <SearchBar
            value={searchValue}
            onChange={handleChange}
            onCloseClick={handleCloseClick}
          />
        }
        folderToolBar={
          <FolderToolBar
            folders={folders}
            selectedFolderId={selectedFolderId}
            setSelectedFolderId={setSelectedFolderId}
          />
        }
        cardList={<CardList linksData={linksData} />}
      />
    </Layout>
  );
}

// 한 페이지 안에서 여러 데이터를 가져와야할 경우
// getServerSideProps안에 어떻게 나눠서 받아올 수 있을까요?

export async function getServerSideProps(context) {
  const q = context.query["q"];

  let userData; // 유저 데이터
  let foldersData; // 폴더들 데이터
  let linksData; // 링크들 데이터

  try {
    const userres = await instance.get("/sample/user");
    userData = userres.data;

    const foldersres = await instance.get("/users/1/folders");
    foldersData = foldersres.data.data;

    if (q === "all") {
      const linksres = await instance.get("/users/1/links");
      linksData = linksres.data.data;
    } else {
      const linksres = await instance.get(`/users/1/links?folderId=${q}`);
      linksData = linksres.data.data;
    }
  } catch (error) {
    throw new Error(
      "user 또는 folders 또는 links 데이터를 받아오는 데 실패했습니다."
    );
  }

  return {
    props: {
      userData,
      foldersData,
      linksData,
    },
  };
}
