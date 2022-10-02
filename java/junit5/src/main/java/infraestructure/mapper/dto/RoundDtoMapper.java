package infraestructure.mapper.dto;

import application.dto.extend.PointRoundDto;
import application.dto.extend.SpareRoundDto;
import application.dto.extend.StrikeRoundDto;
import domain.object.vo.RoundGamePitchVo;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper
public interface RoundDtoMapper {

    @Mapping(source = "gameVo", target = "gameDto")
    PointRoundDto toPointRoundDto(RoundGamePitchVo roundGamePitchVo);

    @Mapping(source = "gameVo", target = "gameDto")
    SpareRoundDto toSpareRoundDto(RoundGamePitchVo roundGamePitchVo);

    @Mapping(source = "gameVo", target = "gameDto")
    StrikeRoundDto toStrikeRoundDto(RoundGamePitchVo roundGamePitchVo);
}
