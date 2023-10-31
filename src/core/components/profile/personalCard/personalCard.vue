<template>
  <div id="globalContainer">
    <img id="banner"
      src="https://media.discordapp.net/attachments/696115202185232497/1165637125438451802/image.png?ex=6547932b&is=65351e2b&hm=a094f6480320d6164a083083adaac6040a0995018858a698876131fab93be6ab&=&width=750&height=180" />
    <img id="pfp"
      src="https://cdn.discordapp.com/attachments/696115202185232497/1164987971091578910/image.png?ex=65453698&is=6532c198&hm=5884aea8c834b89241ebe9b18c9e0ba91235a4f49d6aa6d3e86bf4260ebe50c3&" />
    <div id="statusContainer">
      <div id="status"></div>
    </div>

    <div id="profileDataAndButtons">
      <div id="profileNameAndMedals">
        <p id="profileName">Terratiger</p>
        <div id="medals">
          <div id="medal"></div>
          <div id="medal"></div>
          <div id="medal"></div>
          <div id="medal"></div>
        </div>
      </div>
      <div id="profileIdAndTeam">
        <p id="profileId">@Terratiger</p>
        <div id="teamContainer">
          <p id="team">LFT</p>
        </div>
      </div>
      <div id="divider"></div>
      <div id="buttonList">
        <button>Wallet</button>
        <button>Dashboards</button>
        <button>Mirror</button>
        <button>Conceptor</button>

        <button>Calendars</button>

        <button>Notifications</button>
      </div>
      <div id="divider"></div>
      <div id="buttonList">
        <button>Status</button>
        <button>Search</button>
        <button>Friends</button>
        <button>Bookmarks</button>
        <button>Switch Accounts</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  /*body {
    font-family: 'Gotham', sans-serif;
    margin: 0px;
  }*/

  p {
    margin: 0px;
  }

  #globalContainer {
    top: 0px;
    left: 0px;
    width: 324px;
    height: 296px;
    background-color: #1a1a1a;
    border-radius: 12px;
  }

  #banner {
    position: absolute;
    width: 300px;
    height: 72px;
    top: 12px;
    left: 12px;
    border-radius: 8px;
  }

  #pfp {
    position: absolute;
    width: 48px;
    height: 48px;
    left: 24px;
    top: 52px
  }

  #statusContainer {
    position: absolute;
    top: 84px;
    left: 56px;
    border-radius: 100%;
    background-color: #1a1a1a;
    width: 14px;
    height: 14px;
    padding: 2px;
  }

  #status {
    background-color: #00ae40;
    border-radius: 100%;
    width: 100%;
    height: 100%;
  }

  #profileDataAndButtons {
    position: relative;
    left: 12px;
    top: 114px;
    height: auto;
    width: calc(100% - 24px);
  }

  #profileName {
    color: #ffffff;
    font-size: 20px;
  }

  #profileId {
    color: #808080;
    font-size: 16px;
    margin-top: 5px;
  }

  #divider {
    width: 100%;
    height: 2px;
    background-color: #404040;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  #buttonList {
    display: flex;
    height: auto;
  }

  button {

    all: initial;
    color: #ffffff;
    width: 40px;
    height: 40px;
    border-radius: 8px;
  }

  button:hover {
    background-color: #2a2a2a;
  }

  #profileNameAndMedals,
  #profileIdAndTeam {
    display: flex;
    justify-content: space-between
  }

  #medals {
    display: flex;
    float: right;
  }

  #medal {
    margin-left: 4px;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    background-color: yellow;
  }

  #profileIdAndTeam {
    align-items: flex-end
  }

  #teamContainer {
    display: flex;
    background-color: #2a2a2a;
    border-radius: 4px;
    width: 32px;
    height: 16px;
    align-items: center;
    justify-content: space-evenly;
  }

  #team {
    color: #ffffff;
    font-weight: bold;
    font-size: 10px;
  }
</style>