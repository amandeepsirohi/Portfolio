<script>
  import { fade } from "svelte/transition";
  import { contacts } from "../../data";
</script>

<svelte:head>
  <title>Contact • Amandeep</title>
</svelte:head>
<div
  in:fade
  class="grid grid-cols-6 gap-4 lg:gap-6 2xl:gap-8 w-[86vw] lg:w-[66vw] xl:w-[70vw] mb-8 lg:my-0 lg:p-8 mt-4"
>
  {#each contacts as contact (contact.title)}
    <a
      href={contact.url}
      target="_blank"
      class="card bg-base-200 hover:ring-2 hover:ring-primary col-span-6 md:col-span-3 2xl:col-span-2"
    >
      <div class="card-body p-4 lg:p-6 2xl:p-8">
        <div
          class="flex flex-row gap-4 lg:gap-6 2xl:gap-8 justify-between items-center"
        >
          <p class="text-lg md:text-xl 2xl:text-3xl font-bold">
            {contact.title}
          </p>
          <img
            class="h-10 2xl:h-12"
            alt={contact.title}
            src={"/" + contact.img}
          />
        </div>
      </div>
    </a>
  {/each}
</div>
