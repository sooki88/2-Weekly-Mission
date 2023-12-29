import { useGetFolder } from "../folder/data-access-folder/useGetFolder";
import { Layout } from "../sharing/feature-layout/Layout";
import { SharedLayout } from "../page-layout/SharedLayout/SharedLayout";
import { CardList } from "../link/ui-card-list/CardList";
import { FolderInfo } from "../folder/ui-folder-info/FolderInfo";
import { ReadOnlyCard } from "../link/ui-read-only-card/ReadOnlyCard";
import { SearchBar } from "../link/ui-search-bar/SearchBar";

export const SharedPage = () => {
  const { data } = useGetFolder();
  const { profileImage, ownerName, folderName, links } = data || {};

  return (
    <Layout>
      <SharedLayout
        folderInfo={
          <FolderInfo
            profileImage={profileImage}
            ownerName={ownerName}
            folderName={folderName}
          />
        }
        searchBar={<SearchBar />}
        cardList={
          <CardList>
            {links?.map((link) => (
              <ReadOnlyCard key={link?.id} {...link} />
            ))}
          </CardList>
        }
      />
    </Layout>
  );
};
