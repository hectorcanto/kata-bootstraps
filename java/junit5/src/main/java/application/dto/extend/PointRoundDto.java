package application.dto.extend;

import application.dto.RoundDto;
import domain.object.TypePoint;
import domain.object.dao.PitchDao;
import lombok.*;
import lombok.experimental.SuperBuilder;

@SuperBuilder
@Data
public class PointRoundDto extends RoundDto {

    TypePoint typePoint = TypePoint.POINT;

    PitchDao firstLaunch;

    PitchDao secondLaunch;
}
