import Layout from "@/components/layout/Layout";
import TabCarService from "@/components/sections/TabCarService";
import { DarkModeProvider } from "@/components/layout/DarkModeContext";

export default function Home() {
  return (
    <DarkModeProvider>
      <Layout>
        <TabCarService />
      </Layout>
    </DarkModeProvider>
  );
}
