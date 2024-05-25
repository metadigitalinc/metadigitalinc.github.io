<script lang="ts">
  import svelteLogo from "$lib/images/logo.svg";
  import * as Sheet from "$lib/components/ui/sheet/index.js";
  import { Button } from "$lib/components/ui/button/index.js";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
  import IconMenu from "$lib/components/icons/IconMenu.svelte";
  import IconDown from "$lib/components/icons/IconDown.svelte";
</script>

<header
  class="fixed w-screen top-0 shadow-sm bg-white z-50 shadow-[color:hsl(216,_65%,_66%)]"
>
  <nav class="container flex items-center my-4 mx-auto">
    <a href="/" class="flex items-center">
      <img src={svelteLogo} class="w-12 h-12" alt="MetaDigital" />
      <h1 class="text-3xl font-[750]">MetaDigital</h1>
    </a>

    <div class="hidden gap-x-8 ml-12 md:flex">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <div class="relative text-xl font-semibold">
            Solutions <IconDown
              class="absolute left-1/2 w-4 h-4 -translate-x-1/2"
            />
          </div>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content class="mx-4 mt-8">
          <div class="grid grid-cols-2 gap-x-8 p-4">
            <DropdownMenu.Group class="">
              <DropdownMenu.Label>Products</DropdownMenu.Label>
              <DropdownMenu.Separator />
              <DropdownMenu.Item href="/product/analytics">
                <div>
                  <div class="text-xl font-semibold">Analytics</div>
                  <div>
                    Capture more savings with edits, algorithms and analytics
                    customized for your needs in both prepayment and
                    postpayment.
                  </div>
                </div>
              </DropdownMenu.Item>
              <DropdownMenu.Item href="/product/audit">
                <div>
                  <div class="text-xl font-semibold">Audit</div>
                  <div>
                    Use the auditing case manager to review and verify medical
                    documentation, track cases and create reports.
                  </div>
                </div>
              </DropdownMenu.Item>
            </DropdownMenu.Group>
            <DropdownMenu.Group>
              <DropdownMenu.Label>Markets</DropdownMenu.Label>
              <DropdownMenu.Separator />
              <DropdownMenu.Item href="/market/us">
                <div>
                  <div class="text-xl font-semibold">US Paramedical Claims</div>
                  <div>
                    Made for TPAs, health plans and payers to handle paramedical
                    claims
                  </div>
                </div>
              </DropdownMenu.Item>
              <DropdownMenu.Item href="/market/canada"
                ><div>
                  <div class="text-xl font-semibold">
                    Canada Supplemental Health Claims
                  </div>
                  <div>
                    Meeting the needs of Canadian payers for supplemental health
                    claims
                  </div>
                </div></DropdownMenu.Item
              >
            </DropdownMenu.Group>
          </div>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
      <a href="/about" class="relative text-xl font-semibold">About</a>
    </div>

    <a
      class="hidden md:block ml-auto uppercase font-semibold py-4 px-14 bg-[color:hsl(216,_65%,_33%)] hover:bg-[color:hsl(216,_65%,_50%)] text-white rounded-md"
      href="#contact">Contact us</a
    >
    <Sheet.Root>
      <Sheet.Trigger asChild let:builder>
        <Button
          variant="outline"
          size="icon"
          class="ml-auto md:hidden shrink-0"
          builders={[builder]}
        >
          <IconMenu class="w-6 h-6" />
          <span class="sr-only">Toggle navigation menu</span>
        </Button>
      </Sheet.Trigger>
      <Sheet.Content side="left">
        <nav class="grid gap-6 text-lg font-medium">
          <Sheet.Close class="text-left">
            <a href="/" class="flex gap-2 items-center text-lg font-semibold">
              <img src={svelteLogo} class="w-12 h-12" alt="MetaDigital" />
              <span class="sr-only">MetaDigital</span>
            </a>
          </Sheet.Close>
          <div class="text-sm">Products</div>
          <hr />
          <Sheet.Close class="text-left">
            <a
              href="/product/analytics"
              class="text-muted-foreground hover:text-foreground"
              >Audit
            </a>
          </Sheet.Close>
          <Sheet.Close class="text-left">
            <a
              href="/product/audit"
              class="text-muted-foreground hover:text-foreground"
              >Analytics
            </a>
          </Sheet.Close>
          <div class="mt-8 text-sm">Markets</div>
          <hr />
          <Sheet.Close class="text-left">
            <a
              href="/market/us"
              class="text-muted-foreground hover:text-foreground">US</a
            >
          </Sheet.Close>
          <Sheet.Close class="text-left">
            <a
              href="/market/canada"
              class="text-muted-foreground hover:text-foreground">Canada</a
            >
          </Sheet.Close>
          <div class="mt-8 text-sm">About us</div>
          <hr />
          <Sheet.Close class="text-left">
            <a href="/about" class="text-muted-foreground hover:text-foreground"
              >Team</a
            >
          </Sheet.Close>
          <Sheet.Close class="text-left">
            <a
              class="uppercase font-semibold py-4 px-14 bg-[color:hsl(216,_65%,_33%)] hover:bg-[color:hsl(216,_65%,_50%)] text-white rounded-md"
              href="#contact">Contact us</a
            >
          </Sheet.Close>
        </nav>
      </Sheet.Content>
    </Sheet.Root>
  </nav>
</header>
