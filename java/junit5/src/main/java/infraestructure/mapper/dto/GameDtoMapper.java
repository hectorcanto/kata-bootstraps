package infraestructure.mapper.dto;

import application.dto.GameDto;
import domain.object.vo.GameVo;
import org.mapstruct.Mapper;

@Mapper
public interface GameDtoMapper {

    GameDto toGameDto(GameVo gameVo);
}
