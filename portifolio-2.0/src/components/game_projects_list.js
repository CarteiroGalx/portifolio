import Game_project from "./game_project" 

function game_projects_list() { 
    return (
        <div>
            <div className="d-flex justify-content-center align-content-center mb-4">
                <Game_project className="border border-2" nome="Paragon Traveller" imagem="paragon_traveller.png" descricao="capapa"/> 
            </div>
        </div>
    )
}

export default game_projects_list
