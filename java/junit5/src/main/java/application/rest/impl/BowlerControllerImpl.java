package application.rest.impl;


import application.dto.GameDto;
import application.rest.BowlerController;
import application.dto.extend.PointRoundDto;
import application.dto.extend.SpareRoundDto;
import application.dto.extend.StrikeRoundDto;
import domain.object.vo.GameVo;
import domain.object.vo.RoundGamePitchVo;
import infraestructure.mapper.dto.GameDtoMapper;
import infraestructure.mapper.dto.RoundDtoMapper;
import infraestructure.mapper.vo.RoundGameStatusVoMapper;
import infraestructure.service.*;
import infraestructure.service.impl.*;
import org.mapstruct.factory.Mappers;


//@RestController(/bowler)
public class BowlerControllerImpl implements BowlerController {

    GameService gameService;
    RoundService roundServicePoint;
    RoundService roundServiceSpare;
    RoundService roundServiceStrike;
    GameDtoMapper gameDtoMapper;
    RoundGameStatusVoMapper roundGameStatusVoMapper;
    RoundDtoMapper roundDtoMapper;

    public BowlerControllerImpl() {
        this.roundServicePoint = new PointRoundServiceImpl();
        this.roundServiceSpare = new SpareRoundServiceImpl();
        this.roundServiceStrike = new StrikeRoundServiceImpl();
        this.gameService = new GameServiceImpl();
        this.gameDtoMapper = Mappers.getMapper(GameDtoMapper.class);
        this.roundGameStatusVoMapper = Mappers.getMapper(RoundGameStatusVoMapper.class);
        this.roundDtoMapper = Mappers.getMapper(RoundDtoMapper.class);
    }

    //@Post(/start)
    @Override
    public GameDto start(Integer numberGames) {
        GameVo gameVo = gameService.start(numberGames);

        return gameDtoMapper.toGameDto(gameVo);
    }

    //@Post(/round)
    @Override
    public PointRoundDto round(PointRoundDto roundDto) {
        RoundGamePitchVo roundGamePitchVo = roundGameStatusVoMapper.toRoundGameStatusVo(roundDto);

        roundGamePitchVo = roundServicePoint.round(roundGamePitchVo);

        return roundDtoMapper.toPointRoundDto(roundGamePitchVo);
    }

    //@Post(/round)
    @Override
    public SpareRoundDto round(SpareRoundDto roundDto) {
        RoundGamePitchVo roundGamePitchVo = roundGameStatusVoMapper.toRoundGameStatusVo(roundDto);

        roundGamePitchVo = roundServiceSpare.round(roundGamePitchVo);

        return roundDtoMapper.toSpareRoundDto(roundGamePitchVo);
    }

    //@Post(/round)
    @Override
    public StrikeRoundDto round(StrikeRoundDto roundDto) {
        RoundGamePitchVo roundGamePitchVo = roundGameStatusVoMapper.toRoundGameStatusVo(roundDto);

        roundGamePitchVo = roundServiceStrike.round(roundGamePitchVo);

        return roundDtoMapper.toStrikeRoundDto(roundGamePitchVo);
    }
}
