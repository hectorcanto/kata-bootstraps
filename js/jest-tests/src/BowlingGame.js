export class BowlingGame {
	
	constructor(){
		this.maxFrames = 10;
		this.maxPins = 10;
		this.bonus = 10;
		this.rollCollection = []	
	}

	roll(pinCount){
        this.rollCollection.push(pinCount);
    }

    get score(){
        let score = 0;
        let rollIndex = 0;
        for(let i = 0; i < this.maxFrames; i++){

            if(this.isStrike(rollIndex)){
                score += this.strikeBonus(rollIndex);
                rollIndex++;
                continue;
            }

            let frameScore = this.sumFrame(rollIndex);
            
			
			if(this.isSpare(frameScore)){
                score += this.spareBonus(rollIndex)
            }else{
                score += frameScore;
            }
            
            rollIndex+=2
        }
        return score;
    }

    sumFrame(rollIndex){
        return this.rollCollection[rollIndex] + this.rollCollection[rollIndex + 1];
    }
    
    spareBonus(rollIndex){
        return this.bonus+ this.rollCollection[rollIndex + 2];
    }
    strikeBonus(rollIndex){
        return this.bonus + this.rollCollection[rollIndex + 1] + this.rollCollection[rollIndex + 2];
    }

    isSpare(frameScore){
        return frameScore === this.maxPins;
    }

    isStrike(rollIndex){
        return this.rollCollection[rollIndex] === this.maxPins;
    }
}