package tn.esprit.coco.controller;

import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.Charge;
import com.stripe.param.ChargeCreateParams;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@CrossOrigin("*")
@RequestMapping("/stripe")

public class StripeController {
    @PostMapping ("/stripe/{amount}")
    public void payer(@PathVariable("amount") Long amount ) throws StripeException{
        Stripe.apiKey = "sk_test_51P9W2TJY1ZtideJd27RJ8XeWyToqw8QXyIXvaYVKkFOt98sUGDOZ8SPgYwhjVaKVnKrqxWfBcuHUUOsTdOW6LqLT00XqOvwVh8";

        ChargeCreateParams params =
                ChargeCreateParams.builder()
                        .setAmount(amount)
                        .setCurrency("usd")
                        .setSource("tok_visa")
                        .build();

        Charge charge = Charge.create(params);
    }
}
