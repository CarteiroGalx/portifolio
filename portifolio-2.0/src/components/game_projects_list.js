import Game_project from "./game_project"

function game_projects_list() { 
    return (
        <div>
            <div className="d-flex flex-column flex-md-row align-content-center flex-wrap justify-content-md-around mx-5">
                <Game_project nome="Paragon Traveller" imagem="paragon_traveller.png" tool_1="csharp.png" tool_2="unity.png" descricao="Meu primeiro jogo feito na Unity, O jogador terá de sobreviver contra hordas de inimigos e enfrentar chefões poderosos, indo cada vez mais longe e ganhando mais pontos."/> 
                <Game_project nome="Hiper Racer" imagem="hiper_racer.png" tool_1="python.png" descricao="O jogador deve-se desviar de carros que aparecem na pista e coletar moedas, e evitar moedas vermelhas para evitar de perder ponto."/> 
            </div>
            <div className="d-flex flex-column flex-md-row align-content-center flex-wrap justify-content-md-around mx-5">
                <Game_project nome="Apple Thief" imagem="apple_thief.png" tool_1="python.png" descricao="Meu primeiro jogo tanto em Python quanto na vida. O jogador deve coletar 20 maçãs e evitar de ser pego pelo fazendeiro, que fica mais rápido conforme mais maçãs foram pegas."/> 
                <Game_project nome="Kill All!" imagem="kill_all.png" tool_1="csharp.png" tool_2="unity.png" descricao="Um jogo de sobrevivcência contra hordas. A dificuldade vai aumentando a cada monstro eliminado durante as hordas e o jogador fica mais forte."/> 
            </div>
        </div>
    )
}

export default game_projects_list
