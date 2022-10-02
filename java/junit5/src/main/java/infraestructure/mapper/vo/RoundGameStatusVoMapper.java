package infraestructure.mapper.vo;

import application.dto.extend.PointRoundDto;
import application.dto.extend.SpareRoundDto;
import application.dto.extend.StrikeRoundDto;
import domain.object.dao.RoundDao;
import domain.object.vo.RoundGamePitchVo;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper
public interface RoundGameStatusVoMapper {

    @Mapping( source = "gameDto", target = "gameVo")
    RoundGamePitchVo toRoundGameStatusVo(PointRoundDto pointRoundDto);

    @Mapping( source = "gameDto", target = "gameVo")
    RoundGamePitchVo toRoundGameStatusVo(SpareRoundDto spareRoundDto);

    @Mapping( source = "gameDto", target = "gameVo")
    RoundGamePitchVo toRoundGameStatusVo(StrikeRoundDto strikeRoundDto);

    @Mapping( source = "gameDao", target = "gameVo")
    RoundGamePitchVo toRowDao(RoundDao roundDao);
}
