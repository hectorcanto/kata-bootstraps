package application.rest;

import application.dto.GameDto;
import application.dto.extend.PointRoundDto;
import application.dto.extend.SpareRoundDto;
import application.dto.extend.StrikeRoundDto;

public interface BowlerController {

    GameDto start(Integer numberGames);

    PointRoundDto round(PointRoundDto bowler);

    SpareRoundDto round(SpareRoundDto bowler);

    StrikeRoundDto round(StrikeRoundDto bowler);
}
