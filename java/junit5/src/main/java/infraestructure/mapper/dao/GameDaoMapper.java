package infraestructure.mapper.dao;

import domain.object.dao.GameDao;
import domain.object.vo.GameVo;
import org.mapstruct.Mapper;

@Mapper
public interface GameDaoMapper {

    GameDao toGameDao(GameVo gameVo);
}
