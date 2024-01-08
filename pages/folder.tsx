import Layout from "@/components/feature-layout/Layout";
import { SearchBar } from "@/components/folder/ui-search-bar/SearchBar";
import { FolderLayout } from "@/components/page-layout/FolderLayout/FolderLayout";
import { instance } from "@/components/util/instance";
import { ChangeEvent, MouseEventHandler, useState } from "react";

interface UserDataProps {
  id: number;
  name: string;
  email: string;
  profileImageSource: string;
}

interface FolderProps {
  userdata: UserDataProps;
}

export default function Folder({ userdata }: FolderProps) {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  const handleCloseClick = (e: MouseEventHandler<HTMLButtonElement>) => {
    setSearchValue("");
  };

  return (
    <Layout isSticky={false} userdata={userdata}>
      <FolderLayout
        searchBar={
          <SearchBar
            value={searchValue}
            onChange={handleChange}
            onCloseClick={handleCloseClick}
          />
        }
      />
    </Layout>
  );
}

// 유저 데이터 가져오는 함수
export async function getServerSideProps() {
  let userdata;

  try {
    const response = await instance.get("/sample/user");
    userdata = response.data;
  } catch (error) {
    throw new Error("sample/user 데이터를 받아오는 데 실패했습니다.");
  }

  return {
    props: {
      userdata,
    },
  };
}
