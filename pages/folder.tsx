import Layout from "@/components/feature-layout/Layout";
import { instance } from "@/components/util/instance";

// interface UserDataProps {
//   id: number;
//   name: string;
//   email: string;
//   profileImageSource: string;
// }

export default function Folder({ userdata }: any) {
  return (
    <Layout isSticky={false} userdata={userdata}>
      안녕
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
