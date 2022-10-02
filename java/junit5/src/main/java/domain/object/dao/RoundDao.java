package domain.object.dao;

import lombok.Data;

@Data
public class RoundDao {

    GameDao gameDao;

    PitchDao firstLaunch;

    PitchDao secondLaunch;
}
