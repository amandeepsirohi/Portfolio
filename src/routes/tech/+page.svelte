<script>
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";
  import TechCard from "../../components/TechCard.svelte";
  import { backend, frontend, languages, tools } from "../../data";

  onMount(() => document.querySelector(".drawer-content").scrollTo(0, 0));
</script>

<svelte:head>
  <title>Tech Stack • Amandeep</title>
</svelte:head>

<div
  in:fade
  class="grid grid-cols-12 gap-4 lg:gap-6 2xl:gap-8 w-[86vw] lg:w-[79vw] 2xl:w-[70vw] mb-8 lg:my-0 lg:p-8 mt-4"
>
  <div class="col-span-12 xl:col-span-7 flex flex-col gap-4 lg:gap-6 2xl:gap-8">
    <TechCard title="Languages" items={languages} />
    <TechCard title="Web frontend" items={frontend} />
  </div>
  <div class="col-span-12 xl:col-span-5 grid gap-4 lg:gap-6 2xl:gap-8">
    <TechCard title="Web backend" items={backend} />
    <TechCard title="Tools" items={tools} />
  </div>
</div>
