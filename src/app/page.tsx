import Actions from "@/components/Actions";
import BannerCarousel from "@/components/BannerCarousel";
import Header from "@/components/Header";
import HomeActions from "@/components/HomeActions";
import Nav from "@/components/Nav";
import { NoteBar } from "@/components/NoteBar";

export default function Home() {
  return (
    <div className="">
      <Header />
      <BannerCarousel />
      <NoteBar />
      <HomeActions />
      <Actions />
      <Nav />
    </div>
  );
}
