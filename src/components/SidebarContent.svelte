<script>
  import { page } from "$app/stores";
  import HomeIcon from "../components/HomeIcon.svelte";
  import UserIcon from "../components/UserIcon.svelte";
  import BriefcaseIcon from "../components/BriefcaseIcon.svelte";
  import ChatIcon from "../components/ChatIcon.svelte";
  import TerminalIcon from "../components/TerminalIcon.svelte";
  let links = [
    { title: "Home", Icon: HomeIcon, url: "" },
    { title: "About", Icon: UserIcon, url: "about" },
    { title: "Tech Stack", Icon: TerminalIcon, url: "tech" },
    { title: "Projects", Icon: BriefcaseIcon, url: "projects" },
    { title: "Contact", Icon: ChatIcon, url: "contact" },
  ];
</script>

<li>
  <div class="my-8 rounded-xl">
    <img
      class="rounded-full h-32 lg:h-36 2xl:h-[190px] w-32 lg:w-36 2xl:w-48 mx-auto p-2 ring-2 ring-primary object-cover "
      alt="logo"
      src="amandeep.jpg"
      />
  </div>
</li>
{#each links as link (link.title)}
  <li>
    <a
      class="font-semibold text-sm 2xl:text-lg"
      class:active={$page.url.pathname === "/" + link.url}
      href={link.url || "/"}
      >
      <svelte:component
        this={link.Icon}
        classes="h-4 w-4 2xl:h-6 2xl:w-6 mr-4"
        />
      {link.title}
    </a>
  </li>
{/each}
