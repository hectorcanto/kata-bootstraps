package infraestructure.mapper.dao;

import domain.object.dao.RoundDao;
import domain.object.vo.RoundGamePitchVo;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper
public interface RowDaoMapper {

    @Mapping( source = "gameVo", target = "gameDao")
    RoundDao toRowDao(RoundGamePitchVo roundGamePitchVo);
}
