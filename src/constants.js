const apikey = 'E51495C5B4B623417D6B5FED7D044C23'
const steamid = '76561198043928225'

export const url = {
    games: `http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?format=json&include_appinfo=1&key=${apikey}&steamid=${steamid}`,
    img: 'http://media.steampowered.com/steamcommunity/public/images/apps/'
}