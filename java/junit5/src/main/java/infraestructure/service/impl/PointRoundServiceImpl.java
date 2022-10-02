package infraestructure.service.impl;

import domain.object.dao.GameDao;
import domain.object.dao.RoundDao;
import domain.object.vo.RoundGamePitchVo;
import domain.repository.RoundRepository;
import domain.repository.impl.RoundRepositoryImpl;
import infraestructure.mapper.dao.GameDaoMapper;
import infraestructure.mapper.vo.RoundGameStatusVoMapper;
import infraestructure.service.RoundService;
import infraestructure.utils.CalculateRoundUtils;
import org.mapstruct.factory.Mappers;

import java.util.ArrayList;
import java.util.List;

//@Service
public class PointRoundServiceImpl implements RoundService {

    RoundRepository roundRepository;
    GameDaoMapper gameDaoMapper;
    RoundGameStatusVoMapper roundGameStatusVoMapper;

    public PointRoundServiceImpl() {

        this.roundRepository = new RoundRepositoryImpl();
        this.gameDaoMapper = Mappers.getMapper(GameDaoMapper.class);
        this.roundGameStatusVoMapper = Mappers.getMapper(RoundGameStatusVoMapper.class);
    }

    @Override
    public RoundGamePitchVo round(RoundGamePitchVo roundGamePitchVo) {
        //Analizar donde insertar este codigo duplicado 3 veces

        GameDao gameDao = gameDaoMapper.toGameDao(roundGamePitchVo.getGameVo());

        RoundDao roundDao = roundRepository.findFirstByGameByIdDesc(gameDao);
        RoundGamePitchVo roundGamePitchVoFromRepository = roundGameStatusVoMapper.toRowDao(roundDao);

        List<RoundGamePitchVo> roundGamePitchVoCollection = new ArrayList<>();
        roundGamePitchVoCollection.add(roundGamePitchVoFromRepository);
        roundGamePitchVoCollection.add(roundGamePitchVo);

        //Analizar donde insertar este codigo duplicado 3 veces

        CalculateRoundUtils.calculatePoints(roundGamePitchVoCollection);

        roundGamePitchVo.setFirstLaunch(roundGamePitchVo.getFirstLaunch());
        roundGamePitchVo.setSecondLaunch(roundGamePitchVo.getSecondLaunch());

        return roundGamePitchVo;
    }
}
