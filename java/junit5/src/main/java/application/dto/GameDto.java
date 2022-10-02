package application.dto;

import lombok.Builder;
import lombok.Value;

@Builder
@Value
public class GameDto {

    String UUID;

    Integer numLaunchLeft;
}
