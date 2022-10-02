package domain.object.vo;

import domain.object.TypePoint;
import domain.object.dao.PitchDao;
import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class RoundGamePitchVo {

    TypePoint typePoint;

    Integer roundLeft;

    PitchVo firstLaunch;

    PitchVo secondLaunch;

    GameVo gameVo;
}
