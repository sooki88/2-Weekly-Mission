import { useGetFolders } from "../folder/data-access-folder/useGetFolders";
import { useGetLinks } from "../link/data-access-link/useGetLinks";
import { Layout } from "../sharing/feature-layout/Layout";
import { FolderLayout } from "../page-layout/FolderLayout/FolderLayout";
import { CardList } from "../link/ui-card-list/CardList";
import { FolderToolBar } from "../folder/feature-folder-tool-bar/FolderToolBar";
import { LinkForm } from "../link/ui-link-form/LinkForm";
import { SearchBar } from "../link/ui-search-bar/SearchBar";
import { EditableCard } from "../link/ui-editable-card/EditableCard";
import { useMemo, useState } from "react";
import { NoLink } from "../link/ui-no-link/NoLink";
import { ALL_LINKS_ID } from "../link/data-access-link/constant";

export const FolderPage = () => {
  const { data: folders } = useGetFolders();
  const [selectedFolderId, setSelectedFolderId] = useState(ALL_LINKS_ID);
  const { data: links, loading } = useGetLinks(selectedFolderId);
  const cardList = useMemo(() => {
    if (loading) return null;
    if (links.length === 0) return <NoLink />;
    return (
      <CardList>
        {links.map((link) => (
          <EditableCard key={link?.id} {...link} />
        ))}
      </CardList>
    );
  }, [loading, links]);

  return (
    <Layout isSticky={false}>
      <FolderLayout
        linkForm={<LinkForm />}
        searchBar={<SearchBar />}
        folderToolBar={
          <FolderToolBar
            folders={folders}
            selectedFolderId={selectedFolderId}
            onFolderClick={setSelectedFolderId}
          />
        }
        cardList={cardList}
      />
    </Layout>
  );
};
