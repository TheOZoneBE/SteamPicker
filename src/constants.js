export const url = {
    games: `http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?format=json&include_appinfo=1&key=${process.env.KEY}&steamid=${process.env.ID}`,
    img: 'http://media.steampowered.com/steamcommunity/public/images/apps/'
}