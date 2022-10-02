package infraestructure.utils;

import domain.object.TypePoint;
import domain.object.dao.PitchDao;
import domain.object.vo.PitchVo;
import domain.object.vo.RoundGamePitchVo;

import java.util.List;

public class CalculateRoundUtils {

    public static RoundGamePitchVo calculatePoints(List<RoundGamePitchVo> pointRoundGamePitchVoCollection) {

        RoundGamePitchVo currentPoint = pointRoundGamePitchVoCollection.get(pointRoundGamePitchVoCollection.size() - 1);

        if (pointRoundGamePitchVoCollection.size() > 1){
            RoundGamePitchVo lastRoundPoint = pointRoundGamePitchVoCollection.get(pointRoundGamePitchVoCollection.size() - 2);

            if (TypePoint.SPARE.equals(lastRoundPoint.getTypePoint())) {
                int firstLaunch = Integer.valueOf(currentPoint.getFirstLaunch().getScore()) * 2;

                PitchVo firstPitch = PitchVo.builder()
                        .score(String.valueOf(firstLaunch))
                        .build();

                currentPoint.setFirstLaunch(firstPitch);
            }

            if (TypePoint.STRIKE.equals(lastRoundPoint.getTypePoint())) {
                int firstLaunch = Integer.valueOf(currentPoint.getFirstLaunch().getScore()) * 2;
                int secondLaunch = Integer.valueOf(currentPoint.getSecondLaunch().getScore()) * 2;

                PitchVo firstPitch = PitchVo.builder()
                        .score(String.valueOf(firstLaunch))
                        .build();

                PitchVo secondPitch = PitchVo.builder()
                        .score(String.valueOf(secondLaunch))
                        .build();

                currentPoint.setFirstLaunch(firstPitch);
                currentPoint.setSecondLaunch(secondPitch);
            }

        }

        return currentPoint;
    }

}
