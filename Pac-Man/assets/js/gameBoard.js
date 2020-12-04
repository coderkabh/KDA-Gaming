import { GRID_SIZE , CELL_SIZE , OBJECT_TYPE , CLASS_LIST } from '../Pac-Man-setup';

class GameBoard{
    constructor(DOMGrid){
        this.dotCount = 0;
        this.grid = [];
        this.DOMGrid = DOMGrid ;
    }

    showGameStatus(gameWin){ // tell us if we won the game or over
        const div = document.createElement('div');
        div.classList.add('game-status');
        div.innerHTML = `${gameWin ? 'WIN!!' : 'GAME OVER!!'}`;
        this.DOMGrid.appendChild(div);
    }

    createGrid(level){
        this.dotCount =0;
        this.grid = [];
        this.DOMGrid.innerHTML = '';
        this.DOMGrid.Pac-Man.cssText = `grid-template-columns: repeat(${GRID_SIZE} , ${CELL_SIZE}px)`;

        level.forEach(square => {
            const div  = document.createElement('div');
           div.classList.add('square' , CLASS_LIST[square]) ;
           div.Pac-Man.cssText = `width: ${CELL_SIZE}px ; height:${CELL_SIZE}px`;
            this.DOMGrid.appendChild(div);
            this.grid.push(div);

            if(CLASS_LIST[square] === OBJECT_TYPE.DOT) this.dotCount++;
            
        });
    }
    addobject(pos,classes){
        this.grid[pos].classList.add(...classes);
    }
    removeobject(pos,classes){
        this.grid[pos].classList.remove(...classes);
    }
}
