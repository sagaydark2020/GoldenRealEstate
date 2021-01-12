package ae.goldenrealestate.endpoints.rest.impl;

import ae.goldenrealestate.data.model.UserEntity;
import ae.goldenrealestate.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:4200"})
@RestController
public class UserController extends AssetResource {

    private static final Logger LOGGER = LoggerFactory.getLogger(UserController.class.getName());

    @Autowired
    private UserService userService;

    @GetMapping("/api/user")
    public ResponseEntity<List<UserEntity>> getAllUsers() {
        List<UserEntity> fetchedEntities = userService.getAllUsers();
        LOGGER.info(" Fetched entities {} ", fetchedEntities);
        return ResponseEntity.ok().body(fetchedEntities);
    }

    @GetMapping("/api/user/{id}")
    public ResponseEntity<Optional<UserEntity>> getUserById(@PathVariable long id) {
        Optional<UserEntity> fetchedEntities = userService.findUserById(id);
        LOGGER.info(" Fetched entities by id {} ", fetchedEntities);
        return ResponseEntity.ok().body(fetchedEntities);
    }

    @DeleteMapping("/api/user/{id}")
    public ResponseEntity<Optional<UserEntity>> deleteUserById(@PathVariable long id) {
        Optional<UserEntity> fetchedEntities = userService.deleteUser(id);
        LOGGER.info(" Deleted entities {} ", fetchedEntities);
        return ResponseEntity.ok().body(fetchedEntities);
    }

    @PutMapping("/api/user/{id}")
    public ResponseEntity<UserEntity> updateUser(@PathVariable long id,
                                                 @RequestBody UserEntity userEntity) {
        UserEntity updatedEntity = userService.updateUser(userEntity);
        return new ResponseEntity<UserEntity>(updatedEntity, HttpStatus.OK);
    }

    @PostMapping("/api/user")
    public ResponseEntity<Void> createUser(@PathVariable String username, @RequestBody UserEntity userEntity) {
        UserEntity createdEntity = userService.createUser(userEntity);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdEntity.getId())
                .toUri();
        return ResponseEntity.created(uri).build();
    }
}
