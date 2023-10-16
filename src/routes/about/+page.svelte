<script>
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";
  import { interests as defaultInterests } from "../../data";
  let interests = [...defaultInterests];

  onMount(() => document.querySelector(".drawer-content").scrollTo(0, 0));

  const updateCollapse = (title) => {
    interests = interests.map((item) => {
      if (item.title === title) {
        return { ...item, checked: !item.checked };
      }
      return { ...item, checked: false };
    });
  };
</script>

<svelte:head>
  <title>About • Amandeep</title>
</svelte:head>

<div
  in:fade
  class="grid grid-cols-5 gap-4 lg:gap-8 w-[86vw] lg:w-[66vw] xl:w-[76vw] 2xl:w[70vw] mb-8 lg:my-0 lg:p-8 mt-4"
>
  <div class="flex flex-col gap-4 lg:gap-8 col-span-5 xl:col-span-3">
    <div class="card bg-base-200 hover:ring-2 hover:ring-primary">
      <div class="card-body p-4 lg:p-6 2xl:p-8">
        <p class="text-xl md:text-2xl 2xl:text-4xl mb-2 2xl:mb-3 font-bold">
          Hi there!
        </p>
        <p class="md:text-lg 2xl:text-2xl">
          I'm Amandeep, I go by <span class="text-[#C0C0C0]">buzz_404</span>
          online.
          <br />
          I have completed my bachelor's degree in <span class="text-[#C0C0C0]"> Electrical Engineering </span> from
          <span class="text-[#C0C0C0]">National Institute of Technology Kurukshetra ,India</span>. Having embarked on this coding journey three years ago, I've witnessed the transformative power of code, mostly as a
          <span class="text-[#C0C0C0]">Web developer</span>
          and problem solving in <span class="text-[#C0C0C0]">C++/Python</span>.
        </p>
      </div>
    </div>

    <div class="card bg-base-200 rounded-xl hover:ring-2 hover:ring-primary">
      <div class="card-body p-4 lg:p-6 2xl:p-8">
        <p class="text-xl md:text-2xl 2xl:text-4xl mb-2 2xl:mb-3 font-bold">
          What I do
        </p>
        <p class="md:text-lg 2xl:text-2xl">
         I am an <span class="text-[#C0C0C0]">Web developer</span> with a passion for crafting seamless, user-centric digital experiences. With a solid foundation in front-end and back-end technologies, I thrive on turning creative visions into functional, interactive websites.
         I have a strong foundation in <span class="text-[#C0C0C0]">C++ programming</span> and excel in solving complex algorithmic challenges. 
        </p>
      </div>
    </div>
  </div>
  <div
    class="col-span-5 xl:col-span-2 card bg-base-200 rounded-xl hover:ring-2 hover:ring-primary"
  >
    <div class="card-body p-4 lg:p-6 2xl:p-8">
      <p class="text-lg md:text-2xl 2xl:text-4xl font-bold mb-4">
        Things I Enjoy!
      </p>
      <div class="flex flex-col gap-3 lg:gap-4 h-full">
        {#each interests as info (info.title)}
          <div
            on:click={() => {
              updateCollapse(info.title);
            }}
            tabindex="0"
            class="collapse collapse-arrow border border-base-100 rounded-box"
          >
            <input type="checkbox" checked={info.checked} />
            <div class="collapse-title text-lg 2xl:text-2xl font-medium">
              {info.title}
            </div>
            <div class="collapse-content 2xl:text-lg">
              <p>
                {info.content}
              </p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>
