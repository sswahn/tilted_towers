const _Scout = window.Scout;

class Scout {
  
  static async init(param = 'Ninja') {

    await _Scout.configure({
      clientId: 'af2ef8ea-a458-434e-8c00-26fb8f938eb1',
      clientSecret: '10dcae04dca819ab4dd0505fa6dc8b923242bd61230c612a1eaf3377987a4a59',
      scope: 'public.read'
    })

    const titles = await _Scout.titles.list()

    const fortnite = titles.find( t => t.slug === 'fortnite' )

    const player = await _Scout.players.search( param, 'epic', 'pc', fortnite.id, true, true )
    
    const playerId = player.results[ 0 ].player.playerId

    const data = await _Scout.players.get( fortnite.id, playerId, '*')
 
    return data
  }
}

export default Scout;
