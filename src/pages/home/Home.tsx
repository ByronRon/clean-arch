import { Layout } from "@/styled-components";
import {
  CreateHomeButton,
  ModifyHomeButton,
  ResetHomeButton,
} from "./components";
import { HomeTitle } from "./styled-components/home-title.styled";

export default function Home() {
  return (
    <Layout>
      <HomeTitle>Home</HomeTitle>
      <CreateHomeButton />
      <ModifyHomeButton />
      <ResetHomeButton />
    </Layout>
  );
}
