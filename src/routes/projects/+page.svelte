<script>
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";
  import { projects } from "../../data";

  onMount(() => document.querySelector(".drawer-content").scrollTo(0, 0));

  const toLangTitle = (lang) => {
    let str = lang.replace(".png", "");
    return (
      "written in " + str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
    );
  };
</script>

<svelte:head>
  <title>Projects • Amandeep</title>
</svelte:head>

<div
  in:fade
  class="grid grid-cols-6 gap-4 lg:gap-6 2xl:gap-8 w-[86vw] lg:w-[66vw] xl:w-[76vw] 2xl:w-[70vw] my-4 lg:my-3 2xl:my-4 lg:p-8"
>
  {#each projects as project (project.title)}
    <div
      class="card bg-base-200 hover:ring-2 hover:ring-primary col-span-6 md:col-span-2 2xl:col-span-2"
    >
      <div class="card-body p-4 lg:p-6 2xl:p-8">
        <div class="flex flex-row gap-4 mb-1 xl:mb-2">
          <p class="text-lg md:text-xl 2xl:text-3xl font-bold">
            {project.title}
          </p>
          {#if project.lang.includes("png")}
            <img
              class="h-7 2xl:h-10 border-1 border-neutral-focus p-0.5 2xl:p-1 rounded-lg"
              title={toLangTitle(project.lang)}
              alt={project.title}
              src={"/" + project.lang}
            />
          {:else}
            <span
              title={toLangTitle(project.lang)}
              class="h-7 w-7 2xl:h-10 2xl:w-10 border-1 border-neutral-focus text-lg 2xl:text-2xl text-secondary-content rounded-lg flex items-center justify-center"
              >{project.lang[0]}</span
            >
          {/if}
        </div>
        <p class="2xl:text-xl">
          {project.desc}
        </p>
        <div class="ml-auto flex items-center flex-row gap-4">
          <div class="grow" />
          {#if project.url}
            <a
              class="h-10 2xl:h-12 w-10 2xl:w-12 p-1.5 2xl:p-2 bg-neutral-focus rounded-lg flex items-center justify-center"
              href={project.url}
              target="_blank"
              aria-label={"View live version at " + project.url}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 2xl:w-7 h-6 2xl:h-7"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </a>
          {/if}
          {#if project.src}
            <a href={project.src} target="_blank" aria-label={"View source code on codeberg " + project.src}>
              <img
                class="h-10 2xl:h-12 rounded-lg bg-neutral-focus p-1 2xl:p-2"
                alt="View on Codeberg"
                src="/codeberg.png"
              />
            </a>
          {/if}
          {#if project.github}
            <a href={project.github} target="_blank" aria-label={"View source code on github " + project.github}>
              <img
                class="h-10 2xl:h-12 rounded-lg bg-neutral-focus p-1 2xl:p-2"
                alt="View on github"
                src="/github.png"
              />
            </a>
          {/if}
        </div>
      </div>
    </div>
  {/each}
</div>
