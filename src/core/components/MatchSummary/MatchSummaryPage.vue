<template>
  <div v-if="personnalStat">
    <div class="h-full flex flex-col overflow-hidden">
      <div class=" overflow-auto scrollbarV pr-[30px]">
        <div name="resume" class="h-40 p-6 flex justify-between">
          <div
            name="img-bg"
            class="absolute top-0 left-0 right-0 h-40 overflow-hidden rounded-2xl"
          >
            <img :src="formateUrlSplash(info.mapId)" alt="" class="bg-center" />
          </div>
          <div
            name="content-left"
            class="flex h-full flex-col justify-between"
          >
            <div name="ligne-top" class="flex items-center">
              <LeagueOfLegendBig class="h-[53px] w-[53px] text-White" />
              <h1
                class="ml-6"
                :class="personnalStat.statTotal.win ? 'text-Green' : 'text-Red'"
              >
                {{ personnalStat.statTotal.win ? "VICTORY" : "DEFEAT" }}
              </h1>
              <div class="bg-Cloud h-2 w-2 rounded-full ml-3"></div>
              <div class="h-10 w-10 bg-white rounded-full ml-3"></div>
              <h3 class="ml-2 font-medium" v-if="info.gameMode === 'CLASSIC'">
                {{ formatTextLane(personnalStat.statTotal.lane) }}
              </h3>
              <div class="bg-Cloud h-2 w-2 rounded-full ml-3"></div>
              <img
                :src="formateImgChampion(personnalStat.statTotal.championName)"
                alt=""
                class="h-10 w-10 rounded-full ml-3"
              />
              <div class="">
                <img
                  :src="
                    formateImgRunesReforged(
                      personnalStat.statTotal.perks.styles[0].style
                    )
                  "
                  alt=""
                  class="ml-3 mb-[5px] h-7 w-7 p-[3px] rounded-full bg-Anthracite"
                />
                <img
                  :src="
                    formateImgRunesReforged(
                      personnalStat.statTotal.perks.styles[1].style
                    )
                  "
                  alt=""
                  class="ml-3 h-7 w-7 p-[3px] rounded-full bg-Anthracite"
                />
              </div>

              <div class="ml-3 space-y-1">
                <img
                  :src="
                    formateImgSummonerCast(personnalStat.statTotal.summoner1Id)
                  "
                  alt=""
                  class="h-6 w-6 rounded bg-Anthracite"
                />
                <img
                  :src="
                    formateImgSummonerCast(personnalStat.statTotal.summoner2Id)
                  "
                  alt=""
                  class="h-6 w-6 rounded bg-Anthracite"
                />
              </div>
              <div class="flex ml-1">
                <img
                  v-if="personnalStat.statTotal.item0"
                  :src="formateImgItem(personnalStat.statTotal.item0)"
                  alt=""
                  class="h-9 w-9 ml-2 rounded bg-Anthracite"
                />
                <img
                  v-if="personnalStat.statTotal.item1"
                  :src="formateImgItem(personnalStat.statTotal.item1)"
                  alt=""
                  class="h-9 w-9 ml-2 rounded bg-Anthracite"
                />
                <img
                  v-if="personnalStat.statTotal.item2"
                  :src="formateImgItem(personnalStat.statTotal.item2)"
                  alt=""
                  class="h-9 w-9 ml-2 rounded bg-Anthracite"
                />
                <img
                  v-if="personnalStat.statTotal.item3"
                  :src="formateImgItem(personnalStat.statTotal.item3)"
                  alt=""
                  class="h-9 w-9 ml-2 rounded bg-Anthracite"
                />
                <img
                  v-if="personnalStat.statTotal.item4"
                  :src="formateImgItem(personnalStat.statTotal.item4)"
                  alt=""
                  class="h-9 w-9 ml-2 rounded bg-Anthracite"
                />
                <img
                  v-if="personnalStat.statTotal.item5"
                  :src="formateImgItem(personnalStat.statTotal.item5)"
                  alt=""
                  class="h-9 w-9 ml-2 rounded bg-Anthracite"
                />
                <img
                  v-if="personnalStat.statTotal.item6"
                  :src="formateImgItem(personnalStat.statTotal.item6)"
                  alt=""
                  class="h-9 w-9 ml-2 rounded bg-Anthracite"
                />
              </div>
            </div>
            <div name="ligne-bottom" class="flex items-center">
              <p class="mr-1">
                {{ $dayjs(info.gameStartTimestamp).format("DD/MM/YYYY") }}
              </p>
              <div class="bg-Cloud h-1.5 w-1.5 rounded-full ml-3"></div>
              <p class="ml-3">
                Match started at
                {{ $dayjs(info.gameStartTimestamp).format("HH:mm") }}
              </p>
              <div class="bg-Cloud h-1.5 w-1.5 rounded-full ml-3"></div>
              <p class="ml-3">{{ timeDuration(info.gameDuration) }}</p>
              <div class="bg-Cloud h-1.5 w-1.5 rounded-full ml-3"></div>
              <p class="ml-3 font-bold" v-if="info.gameMode === 'CLASSIC'">
                {{ formateKDA(personnalStat.statTotal.challenges.kda) }}
              </p>
              <div class="bg-Cloud h-1.5 w-1.5 rounded-full ml-3"></div>
              <div class="flex ml-3">
                <p
                  class="mr-1"
                  :class="
                    personnalStat.statTotal.teamId === 100
                      ? 'font-black'
                      : 'font-normal'
                  "
                >
                  {{
                    team100[0].statTotal.kills +
                    team100[1].statTotal.kills +
                    team100[2].statTotal.kills +
                    team100[3].statTotal.kills +
                    team100[4].statTotal.kills
                  }}
                </p>
                <p class="mr-1">-</p>
                <p
                  class="mr-1"
                  :class="
                    personnalStat.statTotal.teamId === 200
                      ? 'font-black'
                      : 'font-normal'
                  "
                >
                  {{
                    team200[0].statTotal.kills +
                    team200[1].statTotal.kills +
                    team200[2].statTotal.kills +
                    team200[3].statTotal.kills +
                    team200[4].statTotal.kills
                  }}
                </p>
              </div>
            </div>
          </div>
          <div
            name="content-right"
            class="flex h-full flex-col justify-between items-end"
          >
            <div class="flex">
              <div class="h-15 w-15 pt-2.5 pl-[18px] bg-DarkRock rounded-full">
                <PaperAirplaneIcon class="h-8 w-8 rotate-[45deg] text-White" />
              </div>
              <div
                class="h-15 w-15 p-[14px] bg-DarkRock rounded-full text-White ml-3"
              >
                <XIcon class="h-8 w-8" />
              </div>
            </div>
            <div class="flex -space-x-[17px]">
              <div class="h-9 w-9 p-2 bg-LightGrey rounded-full"></div>
              <div class="h-9 w-9 p-2 bg-LightGrey rounded-full"></div>
              <div class="h-9 w-9 p-2 bg-LightGrey rounded-full"></div>
              <div class="h-9 w-9 p-2 bg-LightGrey rounded-full"></div>
              <div class="h-9 w-9 p-2 bg-LightGrey rounded-full"></div>
              <div class="h-9 w-9 flex justify-center bg-Stone rounded-full">
                <p class="m-auto text-White font-bold text-[16px]">
                  <span class="font-bold text-[12px]">+</span>5
                </p>
              </div>
            </div>
            <!-- TODO: si pas d'amis en face
           <div class="flex -space-x-3">
          <div class="h-9 w-9 p-2 bg-DarkRock rounded-full"></div>
          <div class="h-9 w-9 p-2 bg-LightRock rounded-full"></div>
          <div class="h-9 w-9 p-2 bg-Gravel rounded-full"></div>
          <div class="h-9 w-9 p-2 bg-Cloud rounded-full"></div>
          <div class="h-9 w-9 p-2 bg-Rock rounded-full"></div>
        </div> -->
          </div>
        </div>
        <div name="compared" class="mt-18 flex-1">
          <div name="title" class="flex justify-between items-center">
            <div class="flex items-center">
              <p class="text-[32px] font-medium text-White">
                Compared to<span class="text-[32px] font-medium text-LightRock">
                  previous match</span
                >
              </p>
              <ChevronDownIcon class="w-6 ml-2 text-LightRock" />
            </div>
          </div>
          <div
            name="content"
            class="mt-6"
            v-on:mouseover="mouseover"
            v-on:mouseleave="mouseleave"
          >
            <div class="absolute inset-0 flex">
              <h3
                class="m-auto bg-Purple z-10 rounded-full px-5 py-3"
                :class="
                  comparedContent
                    ? 'transition duration-300 ease-in-out'
                    : 'opacity-0 transition duration-300 ease-in-out'
                "
              >
                SOON
              </h3>
            </div>
            <div
              class="flex justify-between"
              :class="
                comparedContent
                  ? 'blur-[6px] transition duration-300 ease-in-out'
                  : 'blur-[4px] transition duration-300 ease-in-out'
              "
            >
              <div
                v-for="item in fakeData"
                :key="item.id"
                class="w-[202px] h-[202px] pt-[37px] px-[22px] flex flex-col bg-DarkRock rounded-2xl"
              >
                <h1
                  class="text-center text"
                  :class="item.progress ? 'text-Green' : 'text-Red'"
                >
                  <span class="text-[48px] font-black">{{
                    item.value > 0 ? "+" : "-"
                  }}</span
                  >{{ item.value < 0 ? 0 - item.value : item.value
                  }}<span class="text-[32px] font-black">%</span>
                </h1>
                <p
                  class="text-center mx-auto mt-3 font-medium text-[16px] leading-5 text-White"
                >
                  {{ item.txt }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div name="advice" class="mt-18 flex-1">
          <div name="title" class="justify-between text-White items-center">
            <p class="text-[32px] font-medium text-White">Advice</p>
            <p class="text-[18px] font-medium text-White mt-6">
              Commit yourself on a mission, to improve on a precise aspect of
              the game with REAVE AI.
            </p>
          </div>
          <div
            class="bg-DarkRock rounded-2xl mt-4 p-6"
            v-on:mouseover="mouseover"
            v-on:mouseleave="mouseleave"
          >
            <div class="absolute inset-0 flex">
              <h3
                class="m-auto bg-Purple rounded-full px-5 py-3"
                :class="
                  comparedContent
                    ? 'transition duration-300 ease-in-out'
                    : 'opacity-0 transition duration-300 ease-in-out'
                "
              >
                SOON
              </h3>
            </div>
            <div
              class="flex justify-between"
              :class="
                comparedContent
                  ? 'blur-[6px] transition duration-300 ease-in-out'
                  : 'blur-[4px] transition duration-300 ease-in-out'
              "
            >
              <div name="content-left" class="flex">
                <div class="flex flex-col w-[90px]" name="section">
                  <div
                    class="w-[90px] h-[90px] p-4 rounded-full flex bg-LightRock"
                  >
                    <PuzzleIcon class="text-White" />
                  </div>
                  <img
                    :src="
                      formateImgChampion(personnalStat.statTotal.championName)
                    "
                    alt=""
                    class="h-10 w-10 m-auto mt-4 rounded-full"
                  />
                </div>
                <div name="text" class="ml-[48px]">
                  <p
                    class="text-[48px] leading-tight text-White w-[643px] font-black"
                  >
                    WHEN FIGHTS START, YOU HAVE TO WAIT MORE TIME AT THE FIRST
                    CORNER BEFORE TAKING ANOTHER ONE.
                  </p>
                </div>
              </div>
              <div name="content-left">
                <div name="mission">
                  <div name="card-mission" class="flex">
                    <div
                      name="card"
                      class="w-52 h-52 bg-Gravel rounded-2xl mr-6"
                    >
                      <div
                        class="bg-White w-10 h-10 rounded-full absolute top-4 left-4 flex"
                      >
                        <p class="font-black text-[24px] text-Black m-auto">
                          1
                        </p>
                      </div>
                    </div>
                    <div
                      name="card"
                      class="w-52 h-52 bg-Gravel rounded-2xl mr-6"
                    >
                      <div
                        class="bg-White w-10 h-10 rounded-full absolute top-4 left-4 flex"
                      >
                        <p class="font-black text-[24px] text-Black m-auto">
                          2
                        </p>
                      </div>
                    </div>
                    <div name="card" class="w-52 h-52 bg-Gravel rounded-2xl">
                      <div
                        class="bg-White w-10 h-10 rounded-full absolute top-4 left-4 flex"
                      >
                        <p class="font-black text-[24px] text-Black m-auto">
                          3
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <p class="my-6 text-center">
                  See why and how we gave you this advice:
                </p>
                <ToolsButtonSubmit
                  @action="submit"
                  txtButton="Commit to mission"
                  class="w-[280px] m-auto"
                  :color="''"
                />
              </div>
            </div>
          </div>
        </div>
        <div name="team-scores" class="mt-18 flex-1">
          <div name="tittle">
            <p class="text-[32px] font-medium text-White">Team Scores</p>
          </div>
          <div name="main-content" class="flex space-x-4">
            <div
              name="left-content"
              class="h-[500px] w-1/2 bg-DarkRock rounded-2xl mt-6"
              v-on:mouseover="mouseover"
              v-on:mouseleave="mouseleave"
            >
              <div class="absolute inset-0 z-10 flex">
                <h3
                  class="m-auto bg-Purple rounded-full px-5 py-3"
                  :class="
                    comparedContent
                      ? 'transition duration-300 ease-in-out'
                      : 'opacity-0 transition duration-300 ease-in-out'
                  "
                >
                  SOON
                </h3>
              </div>
              <div
                class="flex justify-between"
                :class="
                  comparedContent
                    ? 'blur-[6px] transition duration-300 ease-in-out'
                    : 'blur-[4px] transition duration-300 ease-in-out'
                "
              >
                <div class="">
                  <img src="/src/core/assets/img/Group_1299.png" alt="" />
                </div>
              </div>
            </div>
            <div
              name="right-content"
              class="h-[500px] w-1/2 bg-DarkRock rounded-2xl mt-6 flex"
            >
              <div
                name="team-bleu"
                class="flex-1 p-6 text-White font-medium flex flex-col justify-between"
              >
                <p class="text-[24px] font-bold text-Blue">
                  Team Blue<span
                    v-if="personnalStat.statTotal.teamId === 100"
                    class="text-[18px] ml-[5px] font-normal"
                    >(you)</span
                  >
                </p>
                <div class="flex justify-between">
                  <div
                    class="font-medium text-[18px] text-LightGrey leading-tight flex"
                  >
                    <div>
                      {{ teamKDA(personnalStat.statTotal.teamId, "my") }}
                    </div>
                    <div class="ml-3 text-White">
                      {{ detailTeamKDA(personnalStat.statTotal.teamId, "my") }}
                    </div>
                  </div>
                  <div
                    class="font-normal text-[18px] text-Gravel leading-tight"
                  >
                    K/D/A
                  </div>
                </div>
                <div class="flex justify-between">
                  <div class="font-medium text-[18px] leading-tight">
                    {{ detailTeamDamage(personnalStat.statTotal.teamId, "my") }}
                  </div>
                  <div
                    class="font-normal text-[18px] text-Gravel leading-tight"
                  >
                    DD/DT/HG
                  </div>
                </div>
                <div class="flex justify-between">
                  <div class="font-medium text-[18px] leading-tight">
                    {{ turretKills(personnalStat.statTotal.teamId, "my") }}
                  </div>
                  <div
                    class="font-normal text-[18px] text-Gravel leading-tight"
                  >
                    turrets destroyed
                  </div>
                </div>
                <div class="flex justify-between">
                  <div class="font-medium text-[18px] leading-tight">
                    {{ visionScores(personnalStat.statTotal.teamId, "my") }}
                  </div>
                  <div
                    class="font-normal text-[18px] text-Gravel leading-tight"
                  >
                    Vision scores
                  </div>
                </div>
                <div class="flex justify-between">
                  <div class="font-medium text-[18px] leading-tight">
                    {{ minionsKilled(personnalStat.statTotal.teamId, "my") }}
                  </div>
                  <div
                    class="font-normal text-[18px] text-Gravel leading-tight"
                  >
                    Sbires farmed
                  </div>
                </div>
                <div class="flex justify-between">
                  <div class="font-medium text-[18px] leading-tight">
                    {{ goldEarned(personnalStat.statTotal.teamId, "my") }}
                  </div>
                  <div
                    class="font-normal text-[18px] text-Gravel leading-tight"
                  >
                    Gold Acquired
                  </div>
                </div>
                <div class="flex justify-between">
                  <div class="font-medium text-[18px] leading-tight">
                    {{ jungleKills(personnalStat.statTotal.teamId, "my") }}
                  </div>
                  <div
                    class="font-normal text-[18px] text-Gravel leading-tight"
                  >
                    Jungle Monsters Killed
                  </div>
                </div>
                <div class="flex justify-between">
                  <div class="font-medium text-[18px] leading-tight">
                    {{ dragonKills(personnalStat.statTotal.teamId, "my") }}
                  </div>
                  <div
                    class="font-normal text-[18px] text-Gravel leading-tight"
                  >
                    Dragon Killed
                  </div>
                </div>
              </div>
              <div
                name="team-red"
                class="flex-1 bg-LightRock p-6 text-White font-medium rounded-r-2xl flex flex-col justify-between"
              >
                <p class="text-[24px] font-bold text-Red">
                  Team Red
                  <span
                    v-if="personnalStat.statTotal.teamId === 200"
                    class="text-[18px] ml-[5px] font-normal"
                    >(you)</span
                  >
                </p>
                <div class="flex justify-between">
                  <div
                    class="font-medium text-[18px] text-LightGrey leading-tight flex"
                  >
                    <div>
                      {{ teamKDA(personnalStat.statTotal.teamId, "other") }}
                    </div>
                    <div class="ml-3 text-White">
                      {{
                        detailTeamKDA(personnalStat.statTotal.teamId, "other")
                      }}
                    </div>
                  </div>
                  <div
                    class="font-normal text-[18px] text-Gravel leading-tight"
                  >
                    K/D/A
                  </div>
                </div>
                <div class="flex justify-between">
                  <div class="font-medium text-[18px] leading-tight">
                    {{
                      detailTeamDamage(personnalStat.statTotal.teamId, "other")
                    }}
                  </div>
                  <div
                    class="font-normal text-[18px] text-Gravel leading-tight"
                  >
                    DD/DT/HG
                  </div>
                </div>
                <div class="flex justify-between">
                  <div class="font-medium text-[18px] leading-tight">
                    {{ turretKills(personnalStat.statTotal.teamId, "other") }}
                  </div>
                  <div
                    class="font-normal text-[18px] text-Gravel leading-tight"
                  >
                    turrets destroyed
                  </div>
                </div>
                <div class="flex justify-between">
                  <div class="font-medium text-[18px] leading-tight">
                    {{ visionScores(personnalStat.statTotal.teamId, "other") }}
                  </div>
                  <div
                    class="font-normal text-[18px] text-Gravel leading-tight"
                  >
                    Vision scores
                  </div>
                </div>
                <div class="flex justify-between">
                  <div class="font-medium text-[18px] leading-tight">
                    {{ minionsKilled(personnalStat.statTotal.teamId, "other") }}
                  </div>
                  <div
                    class="font-normal text-[18px] text-Gravel leading-tight"
                  >
                    Sbires farmed
                  </div>
                </div>
                <div class="flex justify-between">
                  <div class="font-medium text-[18px] leading-tight">
                    {{ goldEarned(personnalStat.statTotal.teamId, "other") }}
                  </div>
                  <div
                    class="font-normal text-[18px] text-Gravel leading-tight"
                  >
                    Gold Acquired
                  </div>
                </div>
                <div class="flex justify-between">
                  <div class="font-medium text-[18px] leading-tight">
                    {{ jungleKills(personnalStat.statTotal.teamId, "other") }}
                  </div>
                  <div
                    class="font-normal text-[18px] text-Gravel leading-tight"
                  >
                    Jungle Monsters Killed
                  </div>
                </div>
                <div class="flex justify-between">
                  <div class="font-medium text-[18px] leading-tight">
                    {{ dragonKills(personnalStat.statTotal.teamId, "other") }}
                  </div>
                  <div
                    class="font-normal text-[18px] text-Gravel leading-tight"
                  >
                    Dragon Killed
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a href=""
            ><p
              class="text-[18px] mt-4 text decoration-solid decoration-white decoration-1 underline"
            >
              Open Statistical Table for more
            </p></a
          >
        </div>
        <div name="Personnal" class="mt-18 flex-1">
          <div name="tittle">
            <p class="text-[32px] font-medium text-White">Personal Scores</p>
          </div>
          <div name="main-content" class="flex space-x-4 mt-6">
            <div
              name="left-content"
              class="w-1/3 h-[770px] bg-DarkRock rounded-2xl flex"
            >
              <div class="p-6 flex flex-col flex-1 justify-between">
                <div class="flex">
                  <img
                    :src="
                      formateImgChampion(personnalStat.statTotal.championName)
                    "
                    alt=""
                    class="h-15 w-15 rounded-full"
                  />
                  <div name="head" class="m-auto ml-4">
                    <p class="font-bold text-White text-[24px]">
                      {{ personnalStat.statTotal.championName }}
                    </p>
                    <p class="font-nomal text-LightGrey text-[18px]">
                      Level {{ personnalStat.statTotal.champLevel }}
                    </p>
                  </div>
                </div>
                <div class="">
                  <p class="font-bold text-White text-2xl mb-2">Combat</p>
                  <div
                    name="fight"
                    class="border-l-2 pl-4 flex flex-col space-y-2"
                  >
                    <div class="flex justify-between">
                      <div class="font-medium text-[18px] text-LightGrey">
                        {{ personnalStat.statTotal.challenges.kda }}
                        <span class="font-medium text-White ml-3"
                          >{{ personnalStat.statTotal.kills }}/{{
                            personnalStat.statTotal.deaths
                          }}/{{ personnalStat.statTotal.assists }}</span
                        >
                      </div>
                      <p class="text-Gravel">K/D/A</p>
                    </div>
                    <div class="flex justify-between">
                      <div class="font-medium text-[18px] text-White">
                        {{ personnalStat.statTotal.totalDamageDealt }}/{{
                          personnalStat.statTotal.totalDamageTaken
                        }}/{{ personnalStat.statTotal.totalHeal }}
                      </div>
                      <p class="text-Gravel">DD/DT/HG</p>
                    </div>
                    <div class="flex justify-between">
                      <div class="font-medium text-[18px] text-White">
                        {{
                          Math.round(
                            ((personnalStat.statTotal.challenges.skillshotsHit *
                              100) /
                              personnalStat.statTotal.challenges
                                .skillshotsDodged) *
                              100
                          ) / 100
                        }}%
                      </div>
                      <p class="text-Gravel">Skillshot Accuracy</p>
                    </div>
                    <div class="flex justify-between">
                      <div class="font-medium text-[18px] text-White">
                        {{ personnalStat.statTotal.challenges.abilityUses }}
                      </div>
                      <p class="text-Gravel">Abilities Used</p>
                    </div>
                    <div class="flex justify-between">
                      <div class="font-medium text-[18px] text-White">
                        {{
                          personnalStat.statTotal.challenges
                            .enemyChampionImmobilizations
                        }}
                      </div>
                      <p class="text-Gravel">Enemy Stunned</p>
                    </div>
                    <div class="flex justify-between">
                      <div class="font-medium text-[18px] text-White">
                        {{ personnalStat.statTotal.timeCCingOthers }}
                      </div>
                      <p class="text-Gravel">Time stunning enemies</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p class="font-bold text-White text-2xl mb-2">Economy</p>
                  <div
                    name="economy"
                    class="border-l-2 pl-4 flex flex-col space-y-2"
                  >
                    <div class="flex justify-between">
                      <div class="font-medium text-[18px] text-White">
                        {{ personnalStat.statTotal.goldEarned }}
                      </div>
                      <p class="text-Gravel">Gold Earned</p>
                    </div>
                    <div class="flex justify-between">
                      <div class="font-medium text-[18px] text-White">
                        {{ personnalStat.statTotal.goldSpent }}
                      </div>
                      <p class="text-Gravel">Gold Spent</p>
                    </div>
                    <div class="flex justify-between">
                      <div class="font-medium text-[18px] text-White">
                        {{
                          Math.round(
                            personnalStat.statTotal.challenges.goldPerMinute *
                              100
                          ) / 100
                        }}
                      </div>
                      <p class="text-Gravel">Average gold gained per minute</p>
                    </div>
                    <div class="flex justify-between">
                      <div class="font-medium text-[18px] text-White">
                        {{ compareGold(personnalStat.statTotal) }}
                      </div>
                      <p class="text-Gravel">Gold delta with lane enemy</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p class="font-bold text-White text-2xl mb-2">Vision</p>
                  <div
                    name="vision"
                    class="border-l-2 pl-4 flex flex-col space-y-2"
                  >
                    <div class="flex justify-between">
                      <div class="font-medium text-[18px] text-White">
                        {{ personnalStat.statTotal.visionScore }}
                      </div>
                      <p class="text-Gravel">Vision Score</p>
                    </div>
                    <div class="flex justify-between">
                      <div class="font-medium text-[18px] text-White">
                        {{ personnalStat.statTotal.wardsPlaced }}
                      </div>
                      <p class="text-Gravel">Wards Placed</p>
                    </div>
                    <div class="flex justify-between">
                      <div class="font-medium text-[18px] text-White">
                        {{ personnalStat.statTotal.wardsKilled }}
                      </div>
                      <p class="text-Gravel">Wards Killed</p>
                    </div>
                    <div class="flex justify-between">
                      <div class="font-medium text-[18px] text-White">
                        {{
                          Math.round(
                            personnalStat.statTotal.challenges
                              .visionScoreAdvantageLaneOpponent * 100
                          ) / 100
                        }}
                      </div>
                      <p class="text-Gravel">
                        vision Score Advantage Lane Opponent
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              name="right-content"
              class="w-2/3 h-[770px] bg-DarkRock rounded-2xl p-6"
              v-on:mouseover="mouseover"
              v-on:mouseleave="mouseleave"
            >
              <div class="absolute inset-0 flex">
                <h3
                  class="m-auto bg-Purple rounded-full px-5 py-3"
                  :class="
                    comparedContent
                      ? 'transition duration-300 ease-in-out'
                      : 'opacity-0 transition duration-300 ease-in-out'
                  "
                >
                  SOON
                </h3>
              </div>
              <div
                class="flex justify-between"
                :class="
                  comparedContent
                    ? 'blur-[6px] transition duration-300 ease-in-out'
                    : 'blur-[4px] transition duration-300 ease-in-out'
                "
              >
                <div>
                  <h1>content</h1>
                </div>
              </div>
            </div>
          </div>
          <a href=""
            ><p
              class="text-[18px] mt-4 text decoration-solid decoration-white decoration-1 underline"
            >
              Open Statistical Table for more
            </p></a
          >
        </div>
        <div name="individual" class="mt-18 flex-1">
          <!-- TODO: voir pour le gestion de la team -->
          <div name="tittle">
            <p class="text-[32px] font-medium text-White">Individual Scores</p>
          </div>
          <div name="main-content">
            <div name="table" class="flex mt-6">
              <table class="overflow-hidden text-[18px] leading-4">
                <tr>
                  <th></th>
                  <th colspan="2">
                    <p class="font-medium text-White pb-4">K/D/A</p>
                  </th>
                  <th><p class="font-medium text-White">DD/DT/HG</p></th>
                  <th><p class="font-medium text-White">Gold Earned</p></th>
                  <th><p class="font-medium text-White">Sbires</p></th>
                  <th><p class="font-medium text-White">Vision</p></th>
                </tr>
                <tr v-for="(player, index) in team100" class="text-center">
                  <td
                    class="flex t justify-between pr-6 py-[5px] items-center"
                    :class="index === 4 ? 'pb-[12px]' : ''"
                  >
                    <p class="text-Blue font-medium">
                      {{ player.statTotal.summonerName }}
                    </p>
                    <img
                      :src="formateImgChampion(player.statTotal.championName)"
                      alt=""
                      class="ml-4 h-10 w-10 rounded-full"
                    />
                  </td>
                  <td
                    class="pr-3 pl-8 py-1 bg-Rock"
                    :class="index === 0 ? 'rounded-tl-2xl' : ''"
                  >
                    <p class="font-medium text-White mr-6 text-left">
                      {{
                        Math.round(player.statTotal.challenges.kda * 100) / 100
                      }}
                    </p>
                  </td>
                  <td class="pr-8 pl-3 py-1 bg-Rock">
                    <p class="text-left">
                      {{ player.statTotal.kills }}
                      <span class="font-medium">/</span>
                      {{ player.statTotal.deaths }}
                      <span class="font-medium">/</span>
                      {{ player.statTotal.assists }}
                    </p>
                  </td>
                  <td class="px-8 py-1">
                    <p class="">
                      {{ player.statTotal.totalDamageDealt }}
                      <span class="font-medium">/</span>
                      {{ player.statTotal.totalDamageTaken }}
                      <span class="font-medium">/</span>
                      {{ player.statTotal.totalHeal }}
                    </p>
                  </td>
                  <td class="px-8 py-1 bg-Rock">
                    <p>{{ player.statTotal.goldEarned }}</p>
                  </td>
                  <td class="px-8 py-1">
                    <p>{{ player.statTotal.totalMinionsKilled }}</p>
                  </td>
                  <td
                    class="px-8 py-1 bg-Rock text-right"
                    :class="index === 0 ? 'rounded-tr-2xl' : ''"
                  >
                    <p>
                      {{
                        Math.round(
                          player.statTotal.challenges.visionScorePerMinute * 100
                        ) / 100
                      }}
                      <span class="text-Silver">Vis/Min</span>
                    </p>
                  </td>
                </tr>

                <tr v-for="(player, index) in team200" class="text-center">
                  <td
                    class="flex justify-between pr-6 py-[5px] items-center"
                    :class="index === 4 ? 'pt-[12px]' : ''"
                  >
                    <p class="text-Red font-medium">
                      {{ player.statTotal.summonerName }}
                    </p>
                    <img
                      :src="formateImgChampion(player.statTotal.championName)"
                      alt=""
                      class="ml-4 h-10 w-10 rounded-full"
                    />
                  </td>
                  <td
                    class="pr-3 pl-8 py-1 bg-LightRock"
                    :class="index === 4 ? 'rounded-bl-2xl' : ''"
                  >
                    <p class="font-medium text-White mr-6 text-left">
                      {{
                        Math.round(player.statTotal.challenges.kda * 100) / 100
                      }}
                    </p>
                  </td>
                  <td class="pr-8 pl-3 py-1 bg-LightRock">
                    <p class="text-LightGrey flex-1 text-left">
                      {{ player.statTotal.kills }}
                      <span class="font-medium">/</span>
                      {{ player.statTotal.deaths }}
                      <span class="font-medium">/</span>
                      {{ player.statTotal.assists }}
                    </p>
                  </td>
                  <td class="px-8 py-2 bg-Rock">
                    <p>
                      {{ player.statTotal.totalDamageDealt }}
                      <span class="font-medium">/</span>
                      {{ player.statTotal.totalDamageTaken }}
                      <span class="font-medium">/</span>
                      {{ player.statTotal.totalHeal }}
                    </p>
                  </td>
                  <td class="px-8 py-2 bg-LightRock">
                    <p>{{ player.statTotal.goldEarned }}</p>
                  </td>
                  <td class="px-8 py-2 bg-Rock">
                    <p>{{ player.statTotal.totalMinionsKilled }}</p>
                  </td>
                  <td
                    class="px-8 py-2 bg-LightRock text-right"
                    :class="index === 4 ? 'rounded-br-2xl' : ''"
                  >
                    <p>
                      {{
                        Math.round(
                          player.statTotal.challenges.visionScorePerMinute * 100
                        ) / 100
                      }}
                      <span class="text-Silver">Vis/Min</span>
                    </p>
                  </td>
                </tr>
              </table>
              <!-- <table v-else class="overflow-hidden text-[18px]">
            <tr class="font-medium text-White">
              <th></th>
              <th colspan="2" class="font-medium">K/D/A</th>
              <th class="font-medium">DD/DT/HG</th>
              <th class="font-medium">Gold Earned</th>
              <th class="font-medium">Sbires</th>
              <th class="font-medium">Vision</th>
            </tr>
            <tr v-for="(player, index) in team200" class="text-center">
              <td
                class="flex text-Blue text-[18px] font-medium justify-between pr-6 py-[5px] items-center"
                :class="index === 4 ? 'pb-[12px]' : ''"
              >
                {{ player.statTotal.summonerName }}
                <img
                  :src="formateImgChampion(player.statTotal.championName)"
                  alt=""
                  class="ml-4 h-10 w-10 rounded-full"
                />
              </td>
              <td
                class="justify-between pr-3 pl-8 py-1 bg-Rock"
                :class="index === 0 ? 'rounded-tl-2xl' : ''"
              >
                <p class="font-medium mr-6">
                  {{ Math.round(player.statTotal.challenges.kda * 100) / 100 }}
                </p>
              </td>
              <td class="justify-between pr-8 pl-3 py-1 bg-Rock">
                <p class="text-LightGrey flex-1">
                  {{ player.statTotal.kills }} / {{ player.statTotal.deaths }} /
                  {{ player.statTotal.assists }}
                </p>
              </td>
              <td class="justify-between px-8 py-1">
                {{ player.statTotal.totalDamageDealt }}/{{
                  player.statTotal.totalDamageTaken
                }}/{{ player.statTotal.totalHeal }}
              </td>
              <td class="justify-between px-8 py-1 bg-Rock">
                {{ player.statTotal.goldEarned }}
              </td>
              <td class="justify-between px-8 py-1">
                {{ player.statTotal.totalMinionsKilled }}
              </td>
              <td
                class="justify-between px-8 py-1 bg-Rock"
                :class="index === 0 ? 'rounded-tr-2xl' : ''"
              >
                {{
                  Math.round(
                    player.statTotal.challenges.visionScorePerMinute * 100
                  ) / 100
                }}
                Vis/Min
              </td>
            </tr>

            <tr v-for="(player, index) in team100" class="text-center">
              <td
                class="flex text-Red text-[18px] font-medium justify-between pr-6 py-[5px] items-center"
                :class="index === 0 ? 'pt-[12px]' : ''"
              >
                {{ player.statTotal.summonerName }}
                <img
                  :src="formateImgChampion(player.statTotal.championName)"
                  alt=""
                  class="ml-4 h-10 w-10 rounded-full"
                />
              </td>
              <td
                class="justify-between pr-3 pl-8 py-1 bg-LightRock"
                :class="index === 4 ? 'rounded-bl-2xl' : ''"
              >
                <p class="font-medium mr-6 ">
                  {{ Math.round(player.statTotal.challenges.kda * 100) / 100 }}
                </p>
              </td>
              <td class="justify-between pr-8 pl-3 py-1 bg-LightRock">
                <p class="text-LightGrey flex-1">
                  {{ player.statTotal.kills }} / {{ player.statTotal.deaths }} /
                  {{ player.statTotal.assists }}
                </p>
              </td>
              <td class="justify-between px-8 py-2 bg-Rock">
                {{ player.statTotal.totalDamageDealt }}/{{
                  player.statTotal.totalDamageTaken
                }}/{{ player.statTotal.totalHeal }}
              </td>
              <td class="justify-between px-8 py-2 bg-LightRock">
                {{ player.statTotal.goldEarned }}
              </td>
              <td class="justify-between px-8 py-2 bg-Rock">
                {{ player.statTotal.totalMinionsKilled }}
              </td>
              <td
                class="justify-between px-8 py-2 bg-LightRock"
                :class="index === 4 ? 'rounded-br-2xl' : ''"
              >
                {{
                  Math.round(
                    player.statTotal.challenges.visionScorePerMinute * 100
                  ) / 100
                }}
                Vis/Min
              </td>
            </tr>
          </table> -->
            </div>
          </div>
          <a href=""
            ><p
              class="text-[18px] mt-4 text decoration-solid decoration-white decoration-1 underline"
            >
              Change mode for more & better statistics
            </p></a
          >
        </div>
        <div name="badge" class="mt-18 flex flex-col">
          <div name="title" class="justify-between text-White items-center">
            <p class="text-[32px] font-medium text-White">Earned Medals</p>
          </div>
          <div
            class="rounded-2xl mt-6 flex"
            v-on:mouseover="mouseover"
            v-on:mouseleave="mouseleave"
          >
            <div>
              <div class="absolute inset-0 flex">
                <h3
                  class="m-auto z-10 bg-Purple rounded-full text-White px-5 py-2"
                  :class="
                    comparedContent
                      ? 'transition duration-300 ease-in-out'
                      : 'opacity-0 transition duration-300 ease-in-out'
                  "
                >
                  SOON
                </h3>
              </div>
              <div
                class="flex space-x-3"
                :class="
                  comparedContent
                    ? 'blur-[6px] transition duration-300 ease-in-out'
                    : 'blur-[4px] transition duration-300 ease-in-out'
                "
              >
                <div class="rounded-full h-12 w-12 bg-amber-400"></div>
                <div class="rounded-full h-12 w-12 bg-slate-400"></div>
                <div class="rounded-full h-12 w-12 bg-orange-400"></div>
                <div class="rounded-full h-12 w-12 bg-amber-400"></div>
                <div class="rounded-full h-12 w-12 bg-slate-400"></div>
              </div>
            </div>
          </div>
          <a href=""
            ><p
              class="text-[18px] mt-4 text decoration-solid decoration-white decoration-1 underline"
            >
              See all Reave Medals
            </p></a
          >
        </div>
        <div name="tools" class="mt-18 mb-12 flex flex-col">
          <div name="title" class="justify-between text-White items-center">
            <p class="text-[32px] font-medium text-White">Tools</p>
          </div>
          <div
            class="rounded-2xl mt-6 flex"
            v-on:mouseover="mouseover"
            v-on:mouseleave="mouseleave"
          >
            <div>
              <div class="absolute inset-0 flex">
                <h3
                  class="m-auto z-10 bg-Purple rounded-full text-White px-5 py-2"
                  :class="
                    comparedContent
                      ? 'transition duration-300 ease-in-out'
                      : 'opacity-0 transition duration-300 ease-in-out'
                  "
                >
                  SOON
                </h3>
              </div>
              <div
                class="flex space-x-3"
                :class="
                  comparedContent
                    ? 'blur-[6px] transition duration-300 ease-in-out'
                    : 'blur-[4px] transition duration-300 ease-in-out'
                "
              >
                <PaperAirplaneIcon
                  class="rounded-full h-12 w-12"
                ></PaperAirplaneIcon>
                <PuzzleIcon class="rounded-full h-12 w-12"></PuzzleIcon>
                <PaperAirplaneIcon
                  class="rounded-full h-12 w-12"
                ></PaperAirplaneIcon>
                <PuzzleIcon class="rounded-full h-12 w-12"></PuzzleIcon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FindOneMatch from "@axios/services/servicesMatchSummary";
import useDataStore from "@stores/data";
import useAuthStore from "@stores/auth";
import {
  PaperAirplaneIcon,
  ChevronDownIcon,
  XIcon,
  PuzzleIcon,
} from "@heroicons/vue/outline";
import fakeData from "@core/components/MatchSummary/fakeData";
import ToolsButtonSubmit from "@core/components/buttons/ToolsButtonSubmit.vue";
import LeagueOfLegend from "../../assets/icons/LeagueOfLegend.vue";
import Overwatch from "../../assets/icons/Overwatch.vue";
import Valorant from "../../assets/icons/Valorant.vue";
import LeagueOfLegendBig from "../../assets/icons/LeagueOfLegendBig.vue";
/* changement recup direct les datas dans le back du match
voir peut etre a mettre sur cette route la recup des datas timeline
- passer un query pour savoir sur un partage qui est le you de la game
 */
export default {
  components: {
    PaperAirplaneIcon,
    XIcon,
    ChevronDownIcon,
    PuzzleIcon,
    ToolsButtonSubmit,
    LeagueOfLegend,
    Overwatch,
    Valorant,
    LeagueOfLegendBig,
  },
  data() {
    const dataStore = useDataStore();
    const store = useAuthStore();
    return {
      fakeData,
      store,
      dataStore,
      comparedContent: false,
      info: "",
      players: "",
      personnalStat: "",
      team100: [],
      team200: [],
    };
  },
  methods: {
    submit() {},
    QueryURL() {
      let idRiot = this.$route.query.match;
      //recup le query de l'URL
      this.feadData(idRiot);
    },
    async feadData(id) {
      //puis recup dans le back les datas lié
      let result = await FindOneMatch.lolMatchSummary(id);
      if (result.status === 200) {
        this.info = result.data.data[0].info;
        this.players = result.data.data[0].players;
        this.feadPersonnalStat();
        this.feadTeam();
      } else {
        //ça dégage
      }
    },
    feadPersonnalStat() {
      for (let index = 0; index < this.players.length; index++) {
        const player = this.players[index];
        if (player._id_user === this.store.dataAccount._id) {
          this.personnalStat = player;
        }
      }
    },
    feadTeam() {
      this.players.forEach((player) => {
        if (player.statTotal.teamId === 100) {
          this.team100.push(player);
        } else {
          this.team200.push(player);
        }
      });
    },
    formateUrlSplash(id) {
      if (id === 11) {
        return "https://media.reave.dev/reave/LOL/Large_SummonersRift.png";
      } else {
        return "https://media.reave.dev/reave/LOL/Large_HowlingAbyss.png";
      }
    },
    formatTextLane(lane) {
      if (lane === "TOP") {
        return "Top";
      } else if (lane === "JUNGLE") {
        return "Jungle";
      } else if (lane === "BOTTOM") {
        return "Bot";
      } else if (lane === "MIDDLE") {
        return "Mid";
      }
    },
    formateImgChampion(name) {
      return (
        "http://ddragon.leagueoflegends.com/cdn/" +
        this.dataStore.data.version +
        "/img/champion/" +
        name +
        ".png"
      );
    },
    formateImgRunesReforged(target) {
      for (
        let index = 0;
        index < this.dataStore.runesReforged.length;
        index++
      ) {
        if (this.dataStore.runesReforged[index].id === target) {
          return "https://media.reave.dev/reave/LOL/" + this.dataStore.runesReforged[index].icon;
        }
      }
    },
    formateImgSummonerCast(target) {
      for (const key in this.dataStore.summoners) {
        if (this.dataStore.summoners[key].key == target) {
          return (
            "http://ddragon.leagueoflegends.com/cdn/" +
            this.dataStore.data.version +
            "/img/spell/" +
            this.dataStore.summoners[key].image.full
          );
        }
      }
    },
    formateImgItem(target) {
      return (
        "http://ddragon.leagueoflegends.com/cdn/" +
        this.dataStore.data.version +
        "/img/item/" +
        this.dataStore.items[target].image.full
      );
    },
    timeDuration(value) {
      let sec = value % 60;
      let min = value - sec;
      let minute = min / 60;
      if (sec < 10) {
        sec = "0" + sec;
      }
      return minute + ":" + sec;
    },
    formateKDA(target) {
      let result = [];
      for (let index = 0; index < this.players.length; index++) {
        result.push(this.players[index].statTotal.challenges.kda);
      }
      result.sort(function (a, b) {
        return a + b;
      });
      for (let index = 0; index < result.length; index++) {
        if (result[index] === target) {
          if (index === 0) {
            return index + 1 + "st";
          } else if (index === 1) {
            return index + 1 + "nd";
          } else if (index === 2) {
            return index + 1 + "rd";
          } else {
            return index + 1 + "th";
          }
        }
      }
    },
    mouseover: function () {
      this.comparedContent = true;
    },
    mouseleave: function () {
      this.comparedContent = false;
    },
    teamKDA(teamId, target) {
      let team = "";
      if (target === "my") {
        team = 100;
      } else {
        team = 200;
      }
      if (teamId === team) {
        let result =
          (this.team100[0].statTotal.challenges.kda +
            this.team100[1].statTotal.challenges.kda +
            this.team100[2].statTotal.challenges.kda +
            this.team100[3].statTotal.challenges.kda +
            this.team100[4].statTotal.challenges.kda) /
          5;
        return Math.round(result * 100) / 100;
      } else {
        let result =
          (this.team200[0].statTotal.challenges.kda +
            this.team200[1].statTotal.challenges.kda +
            this.team200[2].statTotal.challenges.kda +
            this.team200[3].statTotal.challenges.kda +
            this.team200[4].statTotal.challenges.kda) /
          5;
        return Math.round(result * 100) / 100;
      }
    },
    detailTeamKDA(teamId, target) {
      let team = "";
      if (target === "my") {
        team = 100;
      } else {
        team = 200;
      }
      if (teamId === team) {
        let kills =
          this.team100[0].statTotal.kills +
          this.team100[1].statTotal.kills +
          this.team100[2].statTotal.kills +
          this.team100[3].statTotal.kills +
          this.team100[4].statTotal.kills;
        let deaths =
          this.team100[0].statTotal.deaths +
          this.team100[1].statTotal.deaths +
          this.team100[2].statTotal.deaths +
          this.team100[3].statTotal.deaths +
          this.team100[4].statTotal.deaths;
        let assists =
          this.team100[0].statTotal.assists +
          this.team100[1].statTotal.assists +
          this.team100[2].statTotal.assists +
          this.team100[3].statTotal.assists +
          this.team100[4].statTotal.assists;
        return kills + " / " + deaths + " / " + assists;
      } else {
        let kills =
          this.team200[0].statTotal.kills +
          this.team200[1].statTotal.kills +
          this.team200[2].statTotal.kills +
          this.team200[3].statTotal.kills +
          this.team200[4].statTotal.kills;
        let deaths =
          this.team200[0].statTotal.deaths +
          this.team200[1].statTotal.deaths +
          this.team200[2].statTotal.deaths +
          this.team200[3].statTotal.deaths +
          this.team200[4].statTotal.deaths;
        let assists =
          this.team200[0].statTotal.assists +
          this.team200[1].statTotal.assists +
          this.team200[2].statTotal.assists +
          this.team200[3].statTotal.assists +
          this.team200[4].statTotal.assists;
        return kills + " / " + deaths + " / " + assists;
      }
    },
    detailTeamDamage(teamId, target) {
      let team = "";
      if (target === "my") {
        team = 100;
      } else {
        team = 200;
      }
      if (teamId === team) {
        let damageDealt =
          this.team100[0].statTotal.totalDamageDealt +
          this.team100[1].statTotal.totalDamageDealt +
          this.team100[2].statTotal.totalDamageDealt +
          this.team100[3].statTotal.totalDamageDealt +
          this.team100[4].statTotal.totalDamageDealt;
        let damageTaken =
          this.team100[0].statTotal.totalDamageTaken +
          this.team100[1].statTotal.totalDamageTaken +
          this.team100[2].statTotal.totalDamageTaken +
          this.team100[3].statTotal.totalDamageTaken +
          this.team100[4].statTotal.totalDamageTaken;
        let healGiven =
          this.team100[0].statTotal.totalHeal +
          this.team100[1].statTotal.totalHeal +
          this.team100[2].statTotal.totalHeal +
          this.team100[3].statTotal.totalHeal +
          this.team100[4].statTotal.totalHeal;
        return damageDealt + " / " + damageTaken + " / " + healGiven;
      } else {
        let damageDealt =
          this.team200[0].statTotal.totalDamageDealt +
          this.team200[1].statTotal.totalDamageDealt +
          this.team200[2].statTotal.totalDamageDealt +
          this.team200[3].statTotal.totalDamageDealt +
          this.team200[4].statTotal.totalDamageDealt;
        let damageTaken =
          this.team200[0].statTotal.totalDamageTaken +
          this.team200[1].statTotal.totalDamageTaken +
          this.team200[2].statTotal.totalDamageTaken +
          this.team200[3].statTotal.totalDamageTaken +
          this.team200[4].statTotal.totalDamageTaken;
        let healGiven =
          this.team200[0].statTotal.totalHeal +
          this.team200[1].statTotal.totalHeal +
          this.team200[2].statTotal.totalHeal +
          this.team200[3].statTotal.totalHeal +
          this.team200[4].statTotal.totalHeal;
        return damageDealt + " / " + damageTaken + " / " + healGiven;
      }
    },
    turretKills(teamId, target) {
      let team = "";
      if (target === "my") {
        team = 100;
      } else {
        team = 200;
      }
      if (teamId !== team) {
        return this.team100[4].statTotal.turretsLost;
      } else {
        return this.team200[4].statTotal.turretsLost;
      }
    },
    visionScores(teamId, target) {
      let team = "";
      if (target === "my") {
        team = 100;
      } else {
        team = 200;
      }
      if (teamId === team) {
        let visionScores =
          this.team100[0].statTotal.visionScore +
          this.team100[1].statTotal.visionScore +
          this.team100[2].statTotal.visionScore +
          this.team100[3].statTotal.visionScore +
          this.team100[4].statTotal.visionScore;
        return visionScores;
      } else {
        let visionScores =
          this.team200[0].statTotal.visionScore +
          this.team200[1].statTotal.visionScore +
          this.team200[2].statTotal.visionScore +
          this.team200[3].statTotal.visionScore +
          this.team200[4].statTotal.visionScore;
        return visionScores;
      }
    },
    minionsKilled(teamId, target) {
      let team = "";
      if (target === "my") {
        team = 100;
      } else {
        team = 200;
      }
      if (teamId === team) {
        let minionsKilled =
          this.team100[0].statTotal.totalMinionsKilled +
          this.team100[1].statTotal.totalMinionsKilled +
          this.team100[2].statTotal.totalMinionsKilled +
          this.team100[3].statTotal.totalMinionsKilled +
          this.team100[4].statTotal.totalMinionsKilled;
        return minionsKilled;
      } else {
        let minionsKilled =
          this.team200[0].statTotal.totalMinionsKilled +
          this.team200[1].statTotal.totalMinionsKilled +
          this.team200[2].statTotal.totalMinionsKilled +
          this.team200[3].statTotal.totalMinionsKilled +
          this.team200[4].statTotal.totalMinionsKilled;
        return minionsKilled;
      }
    },
    goldEarned(teamId, target) {
      let team = "";
      if (target === "my") {
        team = 100;
      } else {
        team = 200;
      }
      if (teamId === team) {
        let goldEarned =
          this.team100[0].statTotal.goldEarned +
          this.team100[1].statTotal.goldEarned +
          this.team100[2].statTotal.goldEarned +
          this.team100[3].statTotal.goldEarned +
          this.team100[4].statTotal.goldEarned;
        return goldEarned;
      } else {
        let goldEarned =
          this.team200[0].statTotal.goldEarned +
          this.team200[1].statTotal.goldEarned +
          this.team200[2].statTotal.goldEarned +
          this.team200[3].statTotal.goldEarned +
          this.team200[4].statTotal.goldEarned;
        return goldEarned;
      }
    },
    jungleKills(teamId, target) {
      let team = "";
      if (target === "my") {
        team = 100;
      } else {
        team = 200;
      }
      if (teamId === team) {
        let jungleKills =
          this.team100[0].statTotal.challenges.alliedJungleMonsterKills +
          this.team100[1].statTotal.challenges.alliedJungleMonsterKills +
          this.team100[2].statTotal.challenges.alliedJungleMonsterKills +
          this.team100[3].statTotal.challenges.alliedJungleMonsterKills +
          this.team100[4].statTotal.challenges.alliedJungleMonsterKills;
        return Math.round(jungleKills * 100) / 100;
      } else {
        let jungleKills =
          this.team200[0].statTotal.challenges.alliedJungleMonsterKills +
          this.team200[1].statTotal.challenges.alliedJungleMonsterKills +
          this.team200[2].statTotal.challenges.alliedJungleMonsterKills +
          this.team200[3].statTotal.challenges.alliedJungleMonsterKills +
          this.team200[4].statTotal.challenges.alliedJungleMonsterKills;
        return Math.round(jungleKills * 100) / 100;
      }
    },
    dragonKills(teamId, target) {
      let team = "";
      if (target === "my") {
        team = 100;
      } else {
        team = 200;
      }
      if (teamId === team) {
        let dragonKills =
          this.team100[0].statTotal.dragonKills +
          this.team100[1].statTotal.dragonKills +
          this.team100[2].statTotal.dragonKills +
          this.team100[3].statTotal.dragonKills +
          this.team100[4].statTotal.dragonKills;
        return dragonKills;
      } else {
        let dragonKills =
          this.team200[0].statTotal.dragonKills +
          this.team200[1].statTotal.dragonKills +
          this.team200[2].statTotal.dragonKills +
          this.team200[3].statTotal.dragonKills +
          this.team200[4].statTotal.dragonKills;
        return dragonKills;
      }
    },
    compareGold(user) {
      if (user.teamId === 100) {
        for (let index = 0; index < this.team200.length; index++) {
          if (this.team200[index].statTotal.lane === user.lane) {
            return user.goldEarned - this.team200[index].statTotal.goldEarned;
          }
        }
      } else {
        for (let index = 0; index < this.team100.length; index++) {
          if (this.team200[index].statTotal.lane === user.lane) {
            return user.goldEarned - this.team100[index].statTotal.goldEarned;
          }
        }
      }
    },
  },
  computed: {
    setComparedContent(value) {
      this.comparedContent = value;
    },
  },
  mounted() {
    this.QueryURL();
  },
};
</script>
